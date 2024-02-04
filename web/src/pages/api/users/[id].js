// src/pages/api/users/[id].js

export async function get({ params }) {
  const { id } = params;
  // Aquí podrías buscar el usuario por ID en tu base de datos

  // Simulando un usuario encontrado
  const user = { id, name: 'Usuario Ejemplo' };

  return new Response(JSON.stringify(user), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

export function getStaticPaths() {
  return [
    { params: { id: '1' } },
    { params: { id: '2' } },
    // ... más rutas
  ];
}
