// Path: web/astro.config.js

import { defineConfig } from "astro/config";
import path from "path";
import UnoCSS from "unocss/astro";
import svelte from "@astrojs/svelte";
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: "server", // o "hybrid"
  adapter: node({
    mode: 'middleware',
  }),
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
  // https://docs.astro.build/en/guides/internationalization/#domains-experimental
  // i18n: {
  //   defaultLocaLe: 'es',
  //   locales: ['es', 'en'],
  //   routing: {
  //     prefixDefaultLocale: true,
  //   }
  // },
  integrations: [UnoCSS(), svelte()],
  experimental: {
    // i18nDomains: true
  },
});
