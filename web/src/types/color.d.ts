// Path: web/src/interfaces/colors.ts

interface ColorVariants {
  "1"?: string;
  "2"?: string;
  "3"?: string;
  "4"?: string;
  "5"?: string;
}

interface Color {
  base: string;
  lighten?: ColorVariants;
  darken?: ColorVariants;
  accent?: ColorVariants;
}

interface BasicColors {
  black: string;
  white: string;
  transparent: string;
}

interface ListColor {
  red?: Color;
  pink?: Color;
  purple?: Color;
  "deep-purple"?: Color;
  indigo?: Color;
  blue?: Color;
  "light-blue"?: Color;
  cyan?: Color;
  teal?: Color;
  green?: Color;
  "light-green"?: Color;
  lime?: Color;
  yellow?: Color;
  amber?: Color;
  orange?: Color;
  "deep-orange"?: Color;
  brown?: Color;
  "blue-grey"?: Color;
  grey?: Color;
  shades?: Color;
  basic: BasicColors;
}

// Tipos para las diferentes categorías de colores en la paleta
type PrimaryColor = {
  base: string;
  on: string;
  container: string;
  onContainer: string;
};
type SecondaryColor = {
  base: string;
  on: string;
  container: string;
  onContainer: string;
};
type TertiaryColor = {
  base: string;
  on: string;
  container: string;
  onContainer: string;
};
type ErrorColor = {
  base: string;
  on: string;
  container: string;
  onContainer: string;
};
type Background = { base: string; on: string };
type Surface = { base: string; on: string };

// Tipo para la paleta completa
interface ColorPalette {
  primary: PrimaryColor;
  secondary: SecondaryColor;
  tertiary: TertiaryColor;
  error: ErrorColor;
  background: Background;
  surface: Surface;
  // ... otros colores como outline, scrim, shadow, etc.
}
