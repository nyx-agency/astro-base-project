// Path: web/uno.config.js

import { defineConfig } from "unocss";
import { presetMini } from "unocss";
import { presetTypography } from "unocss";
import { presetAttributify } from "unocss";
import { presetIcons } from "unocss";
import { presetWebFonts } from "unocss";
import presetUno from "@unocss/preset-uno";

import { typography, color1, color2 } from "./src/presets";

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUno({}),
    presetMini({
      dark: "class",
      theme: {
        // ...
        colors: {
          orange: {
            100: "#ffedd5", // text-orange-100
            200: "#fed7aa", // text-orange-200
            300: "#fdba74", // text-orange-300
            400: "#fb923c", // text-orange-400
            500: "#f97316", // text-orange-500
            600: "#ea580c", // text-orange-600
            700: "#c2410c", // text-orange-700
            800: "#9a3412", // text-orange-800
            900: "#7c2d12", // text-orange-900
          },
          veryCool: "#0000ff", // class="text-very-cool"
          brand: {
            primary: "hsl(var(--hue 217) 78% / 51%)", //class="bg-brand-primary"
          },
        },
      },
    }),
    presetIcons({
      collections: {
        // https://icon-sets.iconify.design/
        "mdi-light": () =>
          import("@iconify-json/mdi-light/icons.json").then((i) => i.default),
        twemoji: () =>
          import("@iconify-json/twemoji/icons.json").then((i) => i.default),
        ph: () => import("@iconify-json/ph/icons.json").then((i) => i.default),
        carbon: () =>
          import("@iconify-json/carbon/icons.json").then((i) => i.default),
        mdi: () =>
          import("@iconify-json/mdi/icons.json").then((i) => i.default),
        logos: () =>
          import("@iconify-json/logos/icons.json").then((i) => i.default),
        "material-symbols": () =>
          import("@iconify-json/material-symbols/icons.json").then(
            (i) => i.default
          ),
        clarity: () =>
          import("@iconify-json/clarity/icons.json").then((i) => i.default),
        emojione: () =>
          import("@iconify-json/emojione/icons.json").then((i) => i.default),
      },
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
    presetTypography({
      selectorName: "typography",
    }),
    presetWebFonts({
      // provider: "google",
      fonts: {
        sans: "Noto Sans",
        "racing-sans-one": [
          {
            name: "Racing Sans One",
            weights: ["400", "600", "700", "800"],
            italic: true,
          },
        ],
        "noto-sans": [
          {
            name: "Noto Sans",
            weights: ["400", "600", "700", "800"],
            italic: true,
          },
        ],
      },
    }),
    typography({
      selectorName: "nyx-text",
      options: {
        test: "test",
      },
    }),
    color1({
      selectorName: "nyx-color1",
      options: {},
    }),
    color2({
      selectorName: "nyx-color2",
      options: {},
    }),
  ],
});
