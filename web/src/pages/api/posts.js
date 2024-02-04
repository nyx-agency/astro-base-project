// src/pages/api/posts.js

export const POST = async ({ request }) => {
  const { title, content } = await request.json();
  // Aquí agregarías la lógica para manejar los datos recibidos, como guardar en una base de datos.

  return new Response(
    JSON.stringify({
      message: `Post con título '${title}' y contenido '${content}' recibido.`,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 201 // Código de estado para "Creado"
    }
  );
};
