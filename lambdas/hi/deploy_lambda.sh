#!/bin/bash

# Desactivar el paginador de AWS CLI
export AWS_PAGER=""

# Cargar NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Esto carga nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # Esto carga la autocompletación de nvm (opcional)

# Definir variables
PROFILE="bypablo"
FUNCTION_NAME="hi"
BUCKET_NAME="lambda-functions-bypablo"
ROLE_ARN="arn:aws:iam::827487080387:role/lambda_basic_execution"
ZIP_FILE="$FUNCTION_NAME.zip"
REGION="sa-east-1"

# Definir una función de limpieza que elimine el archivo ZIP y la carpeta dist
cleanup() {
    echo "Eliminando el archivo ZIP temporal y la carpeta dist..."
    rm -f "../$ZIP_FILE"
    rm -rf "../dist"
}

# Registrar la función de limpieza para que se ejecute al salir del script
trap cleanup EXIT

# Verificar la sesión de AWS CLI
if ! aws sts get-caller-identity --profile $PROFILE --region $REGION > /dev/null; then
    echo "La sesión de AWS no es válida o ha expirado. Por favor, inicie sesión y vuelva a intentarlo."
    exit 1
else
    echo "Sesión de AWS verificada."
fi

# Verificar si nvm está instalado
if ! command -v nvm &> /dev/null; then
    read -p "nvm no está instalado. ¿Desea instalarlo? (y/n) " -n 1 -r
    echo  # Mover a una nueva línea
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        # Instalar nvm. Asegúrate de usar la última versión disponible en el momento de la ejecución.
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
        # Cargar nvm
        export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    else
        echo "Instalación de nvm cancelada."
        exit 1
    fi
fi

# Usar nvm para seleccionar la versión de Node.js
nvm use 20 || nvm install 20

# Ejecutar npm run build
npm run build

# Intentar crear el bucket
CREATE_BUCKET_OUTPUT=$(aws s3api create-bucket --bucket $BUCKET_NAME --region $REGION --create-bucket-configuration LocationConstraint=$REGION --profile $PROFILE 2>&1)

# Verificar si el bucket fue creado exitosamente o ya existe
if [[ $CREATE_BUCKET_OUTPUT == *"BucketAlreadyOwnedByYou"* ]]; then
    echo "El bucket $BUCKET_NAME ya existe y es de tu propiedad."
elif [[ $CREATE_BUCKET_OUTPUT == *"Error"* ]]; then
    echo "Error al crear el bucket $BUCKET_NAME. Detalle del error: $CREATE_BUCKET_OUTPUT"
    exit 1
else
    echo "El bucket $BUCKET_NAME no existe en la región $REGION. Creando el bucket..."

    # Bloquear todo el acceso público al bucket
    aws s3api put-public-access-block --bucket $BUCKET_NAME \
    --public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=true,RestrictPublicBuckets=true" \
    --profile $PROFILE --region $REGION

    # Habilitar el cifrado predeterminado en el bucket (SSE-S3)
    aws s3api put-bucket-encryption --bucket $BUCKET_NAME \
    --server-side-encryption-configuration '{"Rules":[{"ApplyServerSideEncryptionByDefault":{"SSEAlgorithm":"AES256"}}]}' \
    --profile $PROFILE --region $REGION

    echo "Configuración de seguridad y cifrado aplicada al bucket $BUCKET_NAME."
fi

# Navegar al directorio del código y crear ZIP
cd dist || exit
zip -r ../$ZIP_FILE .

# Subir el archivo ZIP a S3
aws s3 --profile $PROFILE cp "../$ZIP_FILE" s3://$BUCKET_NAME/"$ZIP_FILE" --region $REGION

# Verificar si la función Lambda ya existe
if aws lambda get-function --function-name $FUNCTION_NAME --profile $PROFILE --region $REGION 2>/dev/null; then
    echo "La función Lambda ya existe, actualizando el código..."
    # Actualizar la función Lambda existente
    aws lambda update-function-code --function-name $FUNCTION_NAME --s3-bucket $BUCKET_NAME --s3-key $ZIP_FILE --profile $PROFILE --region $REGION
else
    echo "La función Lambda no existe, creando una nueva función..."
    # Crear la función Lambda con el código desde S3
    aws lambda create-function --function-name $FUNCTION_NAME --runtime nodejs20.x --role $ROLE_ARN \
    --handler index.handler --code S3Bucket=$BUCKET_NAME,S3Key=$ZIP_FILE --profile $PROFILE --region $REGION
fi
