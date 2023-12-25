// Path: web/astro.config.js

import { defineConfig } from "astro/config";
import UnoCSS from "unocss/astro";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  // output: "hybrid",
  vite: {},
  server: {
    port: 3210,
    host: true,
  },
  integrations: [UnoCSS(), svelte()],
});
