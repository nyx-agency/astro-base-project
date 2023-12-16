import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: "server",
  vite: {},
  server: { port: 3210, host: true },
  integrations: [],
});
