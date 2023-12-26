// Path: web/astro.config.js

import { defineConfig } from "astro/config";
import path from "path";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // output: "hybrid",
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"), // Aquí el alias de las importaciones. Ajusta la ruta según la estructura de tu proyecto
        "@components": path.resolve("./src/components"),
      },
    },
  },
  server: {
    port: 3210,
    host: true,
  },
  integrations: [UnoCSS(), svelte()],
});
