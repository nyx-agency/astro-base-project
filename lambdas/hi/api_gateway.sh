#!/bin/bash

# Desactivar el paginador de AWS CLI
export AWS_PAGER=""

# Definir variables
PROFILE="bypablo"
REGION="sa-east-1"
API_NAME="cv"
STAGE_NAME="dev"
FUNCTION_NAME="hi"
AUTHORIZATION_TYPE="NONE"

# Obtener ARN de la función Lambda
FUNCTION_ARN=$(aws lambda get-function --function-name $FUNCTION_NAME --region $REGION --profile $PROFILE --query 'Configuration.FunctionArn' --output text)
echo "ARN de la función Lambda: $FUNCTION_ARN"

# Verificar si el API Gateway existe
EXISTING_API_ID=$(aws apigateway get-rest-apis --region $REGION --profile $PROFILE --query "items[?name=='$API_NAME'].id" --output text)
if [ -z "$EXISTING_API_ID" ]; then
    echo "El API Gateway $API_NAME no existe. Creando..."
    API_ID=$(aws apigateway create-rest-api --name "$API_NAME" --region $REGION --profile $PROFILE --query 'id' --output text)
    echo "API Gateway creado con ID: $API_ID"
else
    echo "El API Gateway $API_NAME ya existe con ID: $EXISTING_API_ID"
    API_ID=$EXISTING_API_ID
fi

# Obtener el ID del recurso raíz
PARENT_ID=$(aws apigateway get-resources --rest-api-id $API_ID --region $REGION --profile $PROFILE --query 'items[?path==`/`].id' --output text)
echo "ID del recurso raíz: $PARENT_ID"

# Verificar si el recurso con el nombre de la función ya existe
RESOURCE_ID=$(aws apigateway get-resources --rest-api-id $API_ID --region $REGION --profile $PROFILE --query "items[?pathPart=='$FUNCTION_NAME'].id" --output text)
if [ -z "$RESOURCE_ID" ]; then
    echo "El recurso /$FUNCTION_NAME no existe. Creando..."
    RESOURCE_ID=$(aws apigateway create-resource --rest-api-id $API_ID --region $REGION --profile $PROFILE --parent-id $PARENT_ID --path-part $FUNCTION_NAME --query 'id' --output text)
    echo "Recurso /$FUNCTION_NAME creado con ID: $RESOURCE_ID"
else
    echo "El recurso /$FUNCTION_NAME ya existe con ID: $RESOURCE_ID"
fi

# Configurar métodos GET y POST para el recurso con el nombre de la función
for method in GET POST; do
    # Verificar si el método ya existe
    METHOD_EXISTS=$(aws apigateway get-method --rest-api-id $API_ID --resource-id $RESOURCE_ID --http-method $method --profile $PROFILE --region $REGION 2>&1)
    if [[ $METHOD_EXISTS == *"NotFoundException"* ]]; then
        echo "Creando método $method para el recurso /$FUNCTION_NAME..."
        aws apigateway put-method --rest-api-id $API_ID --resource-id $RESOURCE_ID --http-method $method --authorization-type "$AUTHORIZATION_TYPE" --region $REGION --profile $PROFILE
        echo "Método $method creado para el recurso /$FUNCTION_NAME"
    else
        echo "El método $method para el recurso /$FUNCTION_NAME ya existe, omitiendo creación."
    fi

    # Configurar o actualizar la integración Lambda para el método
    echo "Configurando integración de Lambda para el método $method del recurso /$FUNCTION_NAME..."
    aws apigateway put-integration --rest-api-id $API_ID --resource-id $RESOURCE_ID --http-method $method --type AWS_PROXY --integration-http-method POST --uri "arn:aws:apigateway:$REGION:lambda:path/2015-03-31/functions/$FUNCTION_ARN/invocations" --region $REGION --profile $PROFILE
    echo "Integración de Lambda configurada para el método $method del recurso /$FUNCTION_NAME"

    # Generar un statement id único para el permiso de Lambda
    STATEMENT_ID="apigateway-${API_NAME}-${STAGE_NAME}-${method}-$(date +%s)"

    # Agregar permiso a Lambda para ser invocada por API Gateway para cada método
    echo "Agregando permiso para el método $method..."
    aws lambda add-permission \
        --profile $PROFILE \
        --function-name $FUNCTION_ARN \
        --statement-id $STATEMENT_ID \
        --action "lambda:InvokeFunction" \
        --principal "apigateway.amazonaws.com" \
        --source-arn "arn:aws:execute-api:$REGION:$(aws sts get-caller-identity --profile $PROFILE --query 'Account' --output text):$API_ID/*/${method}/$FUNCTION_NAME" \
        --region $REGION
done

# Generar un statement id único para el permiso de Lambda
STATEMENT_ID="apigateway-${API_NAME}-${STAGE_NAME}-get-$(date +%s)"

# Agregar permiso a Lambda para ser invocada por API Gateway
aws lambda add-permission \
    --profile $PROFILE \
    --function-name $FUNCTION_ARN \
    --statement-id "apigateway-${API_NAME}-${STAGE_NAME}-get-$(date +%s)" \
    --action "lambda:InvokeFunction" \
    --principal "apigateway.amazonaws.com" \
    --source-arn "arn:aws:execute-api:$REGION:$(aws sts get-caller-identity --profile $PROFILE --query 'Account' --output text):$API_ID/*/GET/$FUNCTION_NAME" \
    --region $REGION

# Desplegar el API
DEPLOYMENT_ID=$(aws apigateway create-deployment --rest-api-id $API_ID --stage-name $STAGE_NAME --region $REGION --profile $PROFILE --query 'id' --output text)
echo "API desplegado en el stage $STAGE_NAME con ID de despliegue: $DEPLOYMENT_ID"

# Imprimir ejemplos de cómo usar la API para cada método
echo "Ejemplos de uso para la API:"
for method in GET POST; do
    echo "Método: $method"
    echo "URL: https://$API_ID.execute-api.$REGION.amazonaws.com/$STAGE_NAME/$FUNCTION_NAME"
    if [ "$method" == "POST" ]; then
        echo "Body: { \"key\": \"value\" } (ajustar según sea necesario)"
    fi
    echo ""
done
