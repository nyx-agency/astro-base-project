// Path: web/src/presets/color.ts

import { definePreset } from "unocss";

const colors: ListColor = {
  red: {
    base: "#F44336",
    lighten: {
      "5": "#FFEBEE",
      "4": "#FFCDD2",
      "3": "#EF9A9A",
      "2": "#E57373",
      "1": "#EF5350",
    },
    darken: {
      "1": "#E53935",
      "2": "#D32F2F",
      "3": "#C62828",
      "4": "#B71C1C",
    },
    accent: {
      "1": "#FF8A80",
      "2": "#FF5252",
      "3": "#FF1744",
      "4": "#D50000",
    },
  },

  pink: {
    base: "#E91E63",
    lighten: {
      "5": "#FCE4EC",
      "4": "#F8BBD0",
      "3": "#F48FB1",
      "2": "#F06292",
      "1": "#EC407A",
    },
    darken: {
      "1": "#D81B60",
      "2": "#C2185B",
      "3": "#AD1457",
      "4": "#880E4F",
    },
    accent: {
      "1": "#FF80AB",
      "2": "#FF4081",
      "3": "#F50057",
      "4": "#C51162",
    },
  },

  purple: {
    base: "#9C27B0",
    lighten: {
      "5": "#F3E5F5",
      "4": "#E1BEE7",
      "3": "#CE93D8",
      "2": "#BA68C8",
      "1": "#AB47BC",
    },
    darken: {
      "1": "#8E24AA",
      "2": "#7B1FA2",
      "3": "#6A1B9A",
      "4": "#4A148C",
    },
    accent: {
      "1": "#EA80FC",
      "2": "#E040FB",
      "3": "#D500F9",
      "4": "#AA00FF",
    },
  },

  "deep-purple": {
    base: "#673AB7",
    lighten: {
      "5": "#EDE7F6",
      "4": "#D1C4E9",
      "3": "#B39DDB",
      "2": "#9575CD",
      "1": "#7E57C2",
    },
    darken: {
      "1": "#5E35B1",
      "2": "#512DA8",
      "3": "#4527A0",
      "4": "#311B92",
    },
    accent: {
      "1": "#B388FF",
      "2": "#7C4DFF",
      "3": "#651FFF",
      "4": "#6200EA",
    },
  },

  indigo: {
    base: "#3F51B5",
    lighten: {
      "5": "#E8EAF6",
      "4": "#C5CAE9",
      "3": "#9FA8DA",
      "2": "#7986CB",
      "1": "#5C6BC0",
    },
    darken: {
      "1": "#3949AB",
      "2": "#303F9F",
      "3": "#283593",
      "4": "#1A237E",
    },
    accent: {
      "1": "#8C9EFF",
      "2": "#536DFE",
      "3": "#3D5AFE",
      "4": "#304FFE",
    },
  },

  blue: {
    base: "#2196F3",
    lighten: {
      "5": "#E3F2FD",
      "4": "#BBDEFB",
      "3": "#90CAF9",
      "2": "#64B5F6",
      "1": "#42A5F5",
    },
    darken: {
      "1": "#1E88E5",
      "2": "#1976D2",
      "3": "#1565C0",
      "4": "#0D47A1",
    },
    accent: {
      "1": "#82B1FF",
      "2": "#448AFF",
      "3": "#2979FF",
      "4": "#2962FF",
    },
  },

  "light-blue": {
    base: "#03A9F4",
    lighten: {
      "5": "#E1F5FE",
      "4": "#B3E5FC",
      "3": "#81D4FA",
      "2": "#4FC3F7",
      "1": "#29B6F6",
    },
    darken: {
      "1": "#039BE5",
      "2": "#0288D1",
      "3": "#0277BD",
      "4": "#01579B",
    },
    accent: {
      "1": "#80D8FF",
      "2": "#40C4FF",
      "3": "#00B0FF",
      "4": "#0091EA",
    },
  },

  cyan: {
    base: "#00BCD4",
    lighten: {
      "5": "#E0F7FA",
      "4": "#B2EBF2",
      "3": "#80DEEA",
      "2": "#4DD0E1",
      "1": "#26C6DA",
    },
    darken: {
      "1": "#00ACC1",
      "2": "#0097A7",
      "3": "#00838F",
      "4": "#006064",
    },
    accent: {
      "1": "#84FFFF",
      "2": "#18FFFF",
      "3": "#00E5FF",
      "4": "#00B8D4",
    },
  },

  teal: {
    base: "#009688",
    lighten: {
      "5": "#E0F2F1",
      "4": "#B2DFDB",
      "3": "#80CBC4",
      "2": "#4DB6AC",
      "1": "#26A69A",
    },
    darken: {
      "1": "#00897B",
      "2": "#00796B",
      "3": "#00695C",
      "4": "#004D40",
    },
    accent: {
      "1": "#A7FFEB",
      "2": "#64FFDA",
      "3": "#1DE9B6",
      "4": "#00BFA5",
    },
  },

  green: {
    base: "#4CAF50",
    lighten: {
      "5": "#E8F5E9",
      "4": "#C8E6C9",
      "3": "#A5D6A7",
      "2": "#81C784",
      "1": "#66BB6A",
    },
    darken: {
      "1": "#43A047",
      "2": "#388E3C",
      "3": "#2E7D32",
      "4": "#1B5E20",
    },
    accent: {
      "1": "#B9F6CA",
      "2": "#69F0AE",
      "3": "#00E676",
      "4": "#00C853",
    },
  },

  "light-green": {
    base: "#8BC34A",
    lighten: {
      "5": "#F1F8E9",
      "4": "#DCEDC8",
      "3": "#C5E1A5",
      "2": "#AED581",
      "1": "#9CCC65",
    },
    darken: {
      "1": "#7CB342",
      "2": "#689F38",
      "3": "#558B2F",
      "4": "#33691E",
    },
    accent: {
      "1": "#CCFF90",
      "2": "#B2FF59",
      "3": "#76FF03",
      "4": "#64DD17",
    },
  },

  lime: {
    base: "#CDDC39",
    lighten: {
      "5": "#F9FBE7",
      "4": "#F0F4C3",
      "3": "#E6EE9C",
      "2": "#DCE775",
      "1": "#D4E157",
    },
    darken: {
      "1": "#C0CA33",
      "2": "#AFB42B",
      "3": "#9E9D24",
      "4": "#827717",
    },
    accent: {
      "1": "#F4FF81",
      "2": "#EEFF41",
      "3": "#C6FF00",
      "4": "#AEEA00",
    },
  },

  yellow: {
    base: "#FFEB3B",
    lighten: {
      "5": "#FFFDE7",
      "4": "#FFF9C4",
      "3": "#FFF59D",
      "2": "#FFF176",
      "1": "#FFEE58",
    },
    darken: {
      "1": "#FDD835",
      "2": "#FBC02D",
      "3": "#F9A825",
      "4": "#F57F17",
    },
    accent: {
      "1": "#FFFF8D",
      "2": "#FFFF00",
      "3": "#FFEA00",
      "4": "#FFD600",
    },
  },

  amber: {
    base: "#FFC107",
    lighten: {
      "5": "#FFF8E1",
      "4": "#FFECB3",
      "3": "#FFE082",
      "2": "#FFD54F",
      "1": "#FFCA28",
    },
    darken: {
      "1": "#FFB300",
      "2": "#FFA000",
      "3": "#FF8F00",
      "4": "#FF6F00",
    },
    accent: {
      "1": "#FFE57F",
      "2": "#FFD740",
      "3": "#FFC400",
      "4": "#FFAB00",
    },
  },

  orange: {
    base: "#FF9800",
    lighten: {
      "5": "#FFF3E0",
      "4": "#FFE0B2",
      "3": "#FFCC80",
      "2": "#FFB74D",
      "1": "#FFA726",
    },
    darken: {
      "1": "#FB8C00",
      "2": "#F57C00",
      "3": "#EF6C00",
      "4": "#E65100",
    },
    accent: {
      "1": "#FFD180",
      "2": "#FFAB40",
      "3": "#FF9100",
      "4": "#FF6D00",
    },
  },

  "deep-orange": {
    base: "#FF5722",
    lighten: {
      "5": "#FBE9E7",
      "4": "#FFCCBC",
      "3": "#FFAB91",
      "2": "#FF8A65",
      "1": "#FF7043",
    },
    darken: {
      "1": "#F4511E",
      "2": "#E64A19",
      "3": "#D84315",
      "4": "#BF360C",
    },
    accent: {
      "1": "#FF9E80",
      "2": "#FF6E40",
      "3": "#FF3D00",
      "4": "#DD2C00",
    },
  },

  brown: {
    base: "#795548",
    lighten: {
      "5": "#EFEBE9",
      "4": "#D7CCC8",
      "3": "#BCAAA4",
      "2": "#A1887F",
      "1": "#8D6E63",
    },
    darken: {
      "1": "#6D4C41",
      "2": "#5D4037",
      "3": "#4E342E",
      "4": "#3E2723",
    },
  },

  "blue-grey": {
    base: "#607D8B",
    lighten: {
      "5": "#ECEFF1",
      "4": "#CFD8DC",
      "3": "#B0BEC5",
      "2": "#90A4AE",
      "1": "#78909C",
    },
    darken: {
      "1": "#546E7A",
      "2": "#455A64",
      "3": "#37474F",
      "4": "#263238",
    },
  },

  grey: {
    base: "#9E9E9E",
    lighten: {
      "5": "#FAFAFA",
      "4": "#F5F5F5",
      "3": "#EEEEEE",
      "2": "#E0E0E0",
      "1": "#BDBDBD",
    },
    darken: {
      "1": "#757575",
      "2": "#616161",
      "3": "#424242",
      "4": "#212121",
    },
  },

  shades: {
    base: "#22222280",
    lighten: {
      "5": "#2222220d",
      "4": "#2222220d",
      "3": "#22222233",
      "2": "#2222224d",
      "1": "#22222266",
    },
    darken: {
      "1": "#22222299",
      "2": "#22222299",
      "3": "#222222cc",
      "4": "#222222e6",
    },
  },

  basic: {
    black: "#000000",
    white: "#FFFFFF",
    transparent: "#FFFFFF00",
  },
};

const lightPalette: ColorPalette = {
  primary: {
    base: "#FFD600", // Color primario base
    on: colors["light-green"].darken["1"], // Color sobre primario
    container: colors["light-green"].lighten["5"], // Contenedor primario
    onContainer: colors["light-green"].base, // Color sobre contenedor primario
  },
  secondary: {
    base: colors["yellow"].base, // Color secundario base
    on: colors["yellow"].darken["1"], // Color sobre secundario
    container: colors["yellow"].lighten["5"], // Contenedor secundario
    onContainer: colors["yellow"].base, // Color sobre contenedor secundario
  },
  background: {
    base: colors.grey.lighten["5"], // Fondo base
    on: colors.grey.darken["1"], // Color sobre fondo
  },
  surface: {
    base: colors.grey.lighten["3"], // Superficie base
    on: colors.grey.darken["2"], // Color sobre superficie
  },
};

const darkPalette: ColorPalette = {
  primary: {
    base: "#FF0080", // Color primario base
    on: colors["light-green"].lighten["1"],
    container: colors["light-green"].darken["4"],
    onContainer: colors["light-green"].lighten["5"],
  },
  secondary: {
    base: colors["yellow"].base,
    on: colors["yellow"].lighten["1"],
    container: colors["yellow"].darken["4"],
    onContainer: colors["yellow"].lighten["5"],
  },
  background: {
    base: colors.grey.darken["4"], // Fondo base para tema oscuro
    on: colors.grey.lighten["5"], // Color sobre fondo para tema oscuro
  },
  surface: {
    base: colors.grey.darken["3"], // Superficie base para tema oscuro
    on: colors.grey.lighten["4"], // Color sobre superficie para tema oscuro
  },
};

const themes = {
  light: {
    alias: '',
    palette: lightPalette,
  },
  dark: {
    alias: 'dark',
    palette: darkPalette,
  },
}

// https://unocss.dev/config/presets#presets
export default definePreset((params?: PresetParams) => {
  const { selectorName = 'nyx-color2', options = {} } = params || {}

  return {
    name: selectorName,
    // https://unocss.dev/config/shortcuts
    shortcuts: [
      [
        new RegExp(`^${selectorName}-(.+)$`),
        ([, colorName]) => {
          console.log('shortcuts mode', colorName)
          return `c-${selectorName}-light-${colorName} dark:c-${selectorName}-dark-${colorName}`
        },
      ],
    ],
    rules: [
      [
        new RegExp(`^c-${selectorName}-(.+)$`),
        ([params, colorName]) => {
          const splitParams = colorName.split('-')
          const mode = splitParams[0]
          console.log('rules -> splitParams', splitParams)

          return {
            color: mode === 'light' ? 'blue' : 'red',
            // color: 'blue',
          }
        },
      ],
    ],
  }
})
