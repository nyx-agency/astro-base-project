// src/pages/api/[nombre].js

export const POST = async ({ params }) => {
  const { nombre } = params;
  return new Response(
    JSON.stringify({
      mensaje: `¡Hola, ${nombre}!`
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      }
    }
  );
};
