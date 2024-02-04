// src/pages/api/numero.js

export const GET = async ({ url }) => {
  // Crear una instancia de URL para analizar los parámetros de consulta
  const parsedUrl = new URL(url);
  const params = parsedUrl.searchParams;
  const num = params.get('num') || 'sin número';
  const mensaje = `Tu número es ${num}`;

  const test = 'test de prueba';
  console.log('texto de prueba', test);

  return new Response(
    JSON.stringify({ mensaje }),
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
};
