// Path: web/uno.config.js

import { defineConfig } from "unocss";
import { presetMini } from "unocss";
import { presetTypography } from "unocss";
import { presetAttributify } from "unocss";
import { presetIcons } from "unocss";
import { presetWebFonts } from "unocss";
import presetUno from "@unocss/preset-uno";

import { typography, color } from './src/presets'
import color3 from './src/presets/color3'
import { themes } from './src/presets/colors'

export default defineConfig({
  presets: [
    presetAttributify({}),
    presetUno({}),
    presetMini({
      dark: 'media',
    }),
    presetIcons({
      collections: {
        // https://icon-sets.iconify.design/
        'mdi-light': () =>
          import('@iconify-json/mdi-light/icons.json').then((i) => i.default),
        twemoji: () =>
          import('@iconify-json/twemoji/icons.json').then((i) => i.default),
        ph: () => import('@iconify-json/ph/icons.json').then((i) => i.default),
        carbon: () =>
          import('@iconify-json/carbon/icons.json').then((i) => i.default),
        mdi: () =>
          import('@iconify-json/mdi/icons.json').then((i) => i.default),
        logos: () =>
          import('@iconify-json/logos/icons.json').then((i) => i.default),
        'material-symbols': () =>
          import('@iconify-json/material-symbols/icons.json').then(
            (i) => i.default
          ),
        clarity: () =>
          import('@iconify-json/clarity/icons.json').then((i) => i.default),
        emojione: () =>
          import('@iconify-json/emojione/icons.json').then((i) => i.default),
      },
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography({
      selectorName: 'typography',
    }),
    presetWebFonts({
      // provider: "google",
      fonts: {
        sans: 'Noto Sans',
        'racing-sans-one': [
          {
            name: 'Racing Sans One',
            weights: ['400', '600', '700', '800'],
            italic: true,
          },
        ],
        'noto-sans': [
          {
            name: 'Noto Sans',
            weights: ['400', '600', '700', '800'],
            italic: true,
          },
        ],
      },
    }),
    typography({
      selectorName: 'nyx-text',
      options: {
        test: 'test',
      },
    }),
    // color({
    //   selectorName: 'nyx-color2',
    //   options: {
    //     themes,
    //   },
    // }),
    color3({
      selectorName: 'nyx-color3',
      options: {
        themes,
      },
    }),
  ],
})
