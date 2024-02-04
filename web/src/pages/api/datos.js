// src/pages/api/datos.js

export const GET = async () => {
  // Simulamos la recuperación de datos, como de una base de datos o servicio externo
  const listaDatos = [
    { id: 1, nombre: 'Elemento 1' },
    { id: 2, nombre: 'Elemento 2' },
    { id: 3, nombre: 'Elemento 3' },
    // más elementos...
  ];

  return new Response(JSON.stringify(listaDatos), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
