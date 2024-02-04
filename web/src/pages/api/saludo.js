// src/pages/api/saludo.js

export const GET = async ({ params, request }) => {
  return new Response(
    JSON.stringify({
      mensaje: '¡Hola, mundo!'
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
};
