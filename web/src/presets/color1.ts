// Path: web/src/presets/color.ts

import { definePreset } from "unocss";

import type { PresetParams } from "@/types/preset";
import type { PalleteClass, ThemeClass } from "@/types/color";

const colors: PalleteClass = {
  grey: {
    50: "#FBFBFB",
    100: "#F7F7F7",
    200: "#EEE",
    300: "#E3E3E3",
    400: "#ACACAC",
    500: "#8B8B8B",
    600: "#646464",
    700: "#515151",
    800: "#333",
    900: "#131313",
  },
  neutral: {
    50: "#F8FAFC",
    100: "#F1F5F9",
    200: "#E2E8F0",
    300: "#CBD5E1",
    500: "#64748B",
    600: "#475569",
    700: "#334155",
    800: "#1E293B",
    900: "#0F172A",
  },
  blue: {
    50: "#E5F6FE",
    100: "#E1F4FD",
    200: "#B2E3FA",
    300: "#80D1F6",
    400: "#29B2EF",
    500: "#03A5EC",
    600: "#0297DE",
    700: "#0084CA",
    800: "#0074B6",
    900: "#005494",
  },
  yellow: {
    50: "#FEFAED",
    100: "#FDF0C8",
    200: "#FBE7A3",
    300: "#F9DD7E",
    400: "#F7CE46",
    500: "#F7CE46",
    600: "#F5AA00",
    700: "#F59700",
    900: "#824700",
  },
  green: {
    50: "#ECFDF5",
    100: "#C2E9C8",
    200: "#C2E9C8",
    300: "#99DAA5",
    400: "#45C165",
    500: "#00B649",
    600: "#00A73F",
    700: "#009434",
    800: "#008328",
    900: "#006411",
  },
  red: {
    50: "#FFF4F5",
    100: "#FFEBED",
    200: "#FFCCD0",
    300: "#F59896",
    400: "#F74C46",
    500: "#FC3A28",
    600: "#ED2E28",
    700: "#DB2123",
    800: "#CE171B",
    900: "#C0000B",
  },
  shades: {
    0: "rgba(34, 34, 34, 0.0)",
    50: "rgba(34, 34, 34, 0.05)",
    100: "rgba(34, 34, 34, 0.10)",
    200: "rgba(34, 34, 34, 0.20)",
    300: "rgba(34, 34, 34, 0.30)",
    400: "rgba(34, 34, 34, 0.40)",
    500: "rgba(34, 34, 34, 0.50)",
    600: "rgba(34, 34, 34, 0.60)",
    700: "rgba(34, 34, 34, 0.70)",
    800: "rgba(34, 34, 34, 0.80)",
    900: "rgba(34, 34, 34, 0.90)",
    1000: "rgba(34, 34, 34, 1)",
  },
};

const themes: ThemeClass = {
  green: {
    primary: "#76BC04",
    secondary: "#B1F342",
  },
  yellow: {
    primary: "#FFD600",
    secondary: "#FFE24C",
  },
  white: {
    primary: "#F5F5F5",
    secondary: "#F5F5F5",
  },
  black: {
    primary: "#000",
    secondary: "#000",
  },
  pink: {
    primary: "#FF0080",
    secondary: "#FF0080",
  },
};

const generateCSSVariables = (
  colors: PalleteClass,
  themes: ThemeClass,
  selectorName: string
): string => {
  let cssVariables = "";

  // Generar variables para colores
  for (const colorName in colors) {
    const shades = colors[colorName];
    for (const shade in shades) {
      cssVariables += `--${selectorName}-color-${colorName}-${shade}: ${shades[shade]};\n`;
    }
  }

  // Generar variables para temas
  for (const themeName in themes) {
    const themeColors = themes[themeName];
    for (const color in themeColors) {
      cssVariables += `--${selectorName}-theme-${themeName}-${color}: ${themeColors[color]};\n`;
    }
  }

  return cssVariables;
};

// https://unocss.dev/config/presets#presets
export default definePreset((params?: PresetParams) => {
  const { selectorName = "nyx-color1", options = {} } = params || {};

  return {
    name: selectorName,
    // preflights: [
    //   {
    //     layer: "variables",
    //     getCSS: () => `
    //       :root {
    //         ${generateCSSVariables(colors, themes, selectorName)}
    //       }
    //     `,
    //   },
    // ],
    rules: [
      [
        new RegExp(`^${selectorName}-(\\w+)-(\\w+)-(\\w+)-(.+)$`),
        // example: c-green-yellow-primary
        // example: c-theme-yellow-primary
        (params) => {
          const [, typeAlias, group, color, name] = params;
          // console.log("src/presets/color.ts -> LIGHT -> params", params);
          const typeAliases = {
            bg: "background-color",
            c: "color",
            border: "border-color",
            fill: "fill",
            stroke: "stroke",
          };
          const type = typeAliases[typeAlias as keyof typeof typeAliases];
          if (!type) {
            return {};
          }

          const groups = {
            color: colors,
            theme: themes,
          };
          const groupClass = groups[group as keyof typeof groups];
          if (!groupClass) {
            return {};
          }

          const styles = groupClass[color as keyof typeof groupClass];
          if (!styles) {
            return {};
          }

          const variable = styles[name as keyof typeof styles];
          if (!variable) {
            return {};
          }

          return {
            [type]: variable,
          };
        },
      ],
      [
        new RegExp(`^dark:${selectorName}-(\\w+)-(\\w+)-(\\w+)-(.+)$`),
        // c-theme-yellow-primary
        (params) => {
          const [, typeAlias, group, color, name] = params;
          // console.log("src/presets/color.ts -> DARK -> params", params);
          const typeAliases = {
            bg: "background-color",
            c: "color",
            border: "border-color",
            fill: "fill",
            stroke: "stroke",
          };
          const type = typeAliases[typeAlias as keyof typeof typeAliases];
          if (!type) {
            return {};
          }

          const groups = {
            color: colors,
            theme: themes,
          };
          const groupClass = groups[group as keyof typeof groups];
          if (!groupClass) {
            return {};
          }

          const styles = groupClass[color as keyof typeof groupClass];
          if (!styles) {
            return {};
          }

          const variable = styles[name as keyof typeof styles];
          if (!variable) {
            return {};
          }

          return {
            "@media (prefers-color-scheme: dark)": { [type]: variable },
          };
        },
      ],
    ],
    variants: [],
  };
});

/**
grey: {
  50: #FBFBFB
  100: #F7F7F7
  200: #EEE
  300: #E3E3E3
  400: #ACACAC
  500: #8B8B8B
  600: #646464
  700: #515151
  800: #333
  900: #131313
}

neutral: {
  50: #F8FAFC
  100: #F1F5F9
  200: #E2E8F0
  300: #CBD5E1
  300: #CBD5E1
  500: #64748B
  600: #475569
  700: #334155
  800: #1E293B
  900: #0F172A
}

info: {
  50: #E5F6FE
  100: #E1F4FD
  200: #B2E3FA
  300: #80D1F6
  400: #29B2EF
  500: #03A5EC
  600: #0297DE
  700: #0084CA
  800: #0074B6
  900: #005494
}

alert: {
  50: #FEFAED
  100: #FDF0C8
  200: #FBE7A3
  300: #F9DD7E
  400: #F7CE46
  500: #F7CE46
  600: #F5AA00
  700: #F59700
  600: #B76400
  900: #824700
}

success: {
  50: #ECFDF5
  100: #C2E9C8
  200: #C2E9C8
  300: #99DAA5
  400: #45C165
  500: #00B649
  600: #00A73F
  700: #009434
  800: #008328
  900: #006411
}

error: {
  50: #FFF4F5
  100: #FFEBED
  200: #FFCCD0
  300: #F59896
  400: #F74C46
  500: #FC3A28
  600: #ED2E28
  700: #DB2123
  800: #CE171B
  900: #C0000B
}

shades: {
  0: rgba(34, 34, 34, 0.0)
  50: rgba(34, 34, 34, 0.05)
  100: rgba(34, 34, 34, 0.10)
  200: rgba(34, 34, 34, 0.20)
  300: rgba(34, 34, 34, 0.30)
  400: rgba(34, 34, 34, 0.40)
  500: rgba(34, 34, 34, 0.50)
  600: rgba(34, 34, 34, 0.60)
  700: rgba(34, 34, 34, 0.70)
  800: rgba(34, 34, 34, 0.80)
  900: rgba(34, 34, 34, 0.90)
  1000: rgba(34, 34, 34, 1)
}

green: {
  primary: #76BC04
  secondary: #B1F343
}
yellow: {
  primary: #FFD600
  secondary: #FFE24C
}
*/
