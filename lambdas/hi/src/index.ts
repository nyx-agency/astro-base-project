// Importa la interfaz APIGatewayProxyEvent y APIGatewayProxyResult para tipar los parámetros de entrada y salida de la función
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda'

// Define el handler de la función Lambda
export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  console.log('Evento recibido:', event)

  // Devuelve una respuesta HTTP
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: '¡Hola!' }),
  }
}
