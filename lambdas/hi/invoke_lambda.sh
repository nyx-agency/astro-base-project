#!/bin/bash

# Desactivar el paginador de AWS CLI
export AWS_PAGER=""

# Definir el nombre de la función Lambda directamente en el script
FUNCTION_NAME="hi"
PROFILE="bypablo"
REGION="sa-east-1"
OUTPUT_FILE="lambda_response.json"

# Verificar que se pase la ruta del archivo JSON como argumento
if [ "$#" -ne 1 ]; then
    echo "Uso: $0 <RutaArchivoJSON>"
    exit 1
fi

# Asignar el argumento a una variable
PAYLOAD_FILE="$1"

# Verificar si el archivo de payload existe
if [ ! -f "$PAYLOAD_FILE" ]; then
    echo "El archivo de payload '$PAYLOAD_FILE' no existe."
    exit 1
fi

# Invocar la función Lambda y guardar la respuesta
echo "Invocando la función Lambda '$FUNCTION_NAME' con payload desde '$PAYLOAD_FILE'..."
aws lambda invoke --function-name "$FUNCTION_NAME" --payload fileb://"$PAYLOAD_FILE" --profile $PROFILE --region $REGION "$OUTPUT_FILE"

# Verificar si la invocación fue exitosa
if [ $? -eq 0 ]; then
    echo "Respuesta de Lambda guardada en '$OUTPUT_FILE':"
    cat "$OUTPUT_FILE"
else
    echo "Error al invocar la función Lambda."
    exit 1
fi
