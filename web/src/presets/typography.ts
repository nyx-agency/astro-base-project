// Path: web/src/presets/typography.ts

import { definePreset } from "unocss";

const fontsFamilies: FontFamilyClass = {
  "racing-sans-one": {
    "font-family": "Racing Sans One",
  },
  "noto-sans": {
    "font-family": "Noto Sans",
  },
};

const fontsSizes: FontSizeClass = {
  "title-big": {
    "font-size": "58px",
  },
  h1: {
    "font-size": "48px",
  },
  h2: {
    "font-size": "40px",
  },
  h3: {
    "font-size": "34px",
  },
  h4: {
    "font-size": "28px",
  },
  h5: {
    "font-size": "23px",
  },
  subtitle: {
    "font-size": "19px",
  },
  body: {
    "font-size": "16px",
  },
  caption: {
    "font-size": "13px",
  },
  overline: {
    "font-size": "11px",
  },
};

const fontsWeights: FontWeightClass = {
  regular: {
    "font-weight": "400",
  },
  semibold: {
    "font-weight": "600",
  },
  bold: {
    "font-weight": "700",
  },
  black: {
    "font-weight": "800",
  },
};

const fontsLineHeights: LineHeightClass = {
  title: {
    "line-height": "normal", // Para 'Racing Sans One/Title 2'
  },
  h1: {
    "line-height": "60px", // Para 'Noto Sans/H1/*'
  },
  h2: {
    "line-height": "52px", // Para 'Noto Sans/H2/*'
  },
  h3: {
    "line-height": "42px", // Para 'Noto Sans/H3/*'
  },
  h4: {
    "line-height": "36px", // Para 'Noto Sans/H4/*'
  },
  h5: {
    "line-height": "32px", // Para 'Noto Sans/H5/*'
  },
  subtitle: {
    "line-height": "26px", // Para 'Noto Sans/Subtitle/*'
  },
  body: {
    "line-height": "22px", // Para 'Noto Sans/Body/*'
  },
  caption: {
    "line-height": "18px", // Para 'Noto Sans/Caption/*'
  },
  overline: {
    "line-height": "15px", // Para 'Noto Sans/Overline/*'
  },
};

const fontsLetterSpacings: LetterSpacingClass = {
  title: {
    "letter-spacing": "-2px", // Para 'Noto Sans/Title Big/*'
  },
  h1: {
    "letter-spacing": "-1.911px", // Para 'Noto Sans/H1/*'
  },
  h2: {
    "letter-spacing": "-1.593px", // Para 'Noto Sans/H2/*'
  },
  h3: {
    "letter-spacing": "-1.327px", // Para 'Noto Sans/H3/*'
  },
  h4: {
    "letter-spacing": "-1.106px", // Para 'Noto Sans/H4/*'
  },
  h5: {
    "letter-spacing": "-0.922px", // Para 'Noto Sans/H5/*'
  },
  subtitle: {
    "letter-spacing": "-0.768px", // Para 'Noto Sans/Subtitle/*'
  },
  body: {
    "letter-spacing": "-0.64px", // Para 'Noto Sans/Body/*'
  },
  caption: {
    "letter-spacing": "-0.533px", // Para 'Noto Sans/Caption/*'
  },
  overline: {
    "letter-spacing": "-0.444px", // Para 'Noto Sans/Overline/*'
  },
};


// https://unocss.dev/config/presets#presets
export default definePreset((params?: PresetParams) => {
  const { selectorName = 'nyx-text' } = params || {}

  return {
    name: 'nyx-typography',
    preflights: [
      {
        layer: 'variables',
        getCSS: () => `
          body {
            font-family:
              'Noto Sans',
              system-ui,
              sans-serif,
              Menlo,
              Monaco,
              Lucida Console,
              Liberation Mono,
              DejaVu Sans Mono,
              Bitstream Vera Sans Mono,
              Courier New,
              monospace;
          }
        `,
      },
    ],
    rules: [
      [
        new RegExp(`^${selectorName}-(\\w+)-(.+)$`),
        ([, group, name]) => {
          const groups = {
            font: fontsFamilies,
            s: fontsSizes,
            w: fontsWeights,
            lh: fontsLineHeights,
            ls: fontsLetterSpacings,
          }

          const groupClass = groups[group as keyof typeof groups]
          if (!groupClass) {
            return {}
          }

          const styles = groupClass[name as keyof typeof groupClass]
          if (!styles) {
            return {}
          }

          return styles
        },
      ],
    ],
  }
})
