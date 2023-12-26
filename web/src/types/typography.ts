// Path: web/src/types/typography.ts


export type FontFamilyTypes = "racing-sans-one" | "noto-sans";

export type FontFamilyClass = Record<
  FontFamilyTypes,
  {
    "font-family": string;
  }
>;

// Define un tipo para los tamaños de fuente
export type FontSizeTypes =
  | "title-big"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "subtitle"
  | "body"
  | "caption"
  | "overline";

export type FontSizeClass = Record<
  FontSizeTypes,
  {
    "font-size": string;
  }
>;

// Define un tipo para los pesos de fuente
export type FontWeightTypes = "regular" | "semibold" | "bold" | "black";

export type FontWeightClass = Record<
  FontWeightTypes,
  {
    "font-weight": string;
  }
>;

// Define un tipo para las alturas de línea
export type LineHeightTypes =
  | "title"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "subtitle"
  | "body"
  | "caption"
  | "overline";

export type LineHeightClass = Record<
  LineHeightTypes,
  {
    "line-height": string;
  }
>;

// Define un tipo para los espacios entre letras
export type LetterSpacingTypes =
  | "title"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "subtitle"
  | "body"
  | "caption"
  | "overline";

export type LetterSpacingClass = Record<
  LetterSpacingTypes,
  {
    "letter-spacing": string;
  }
>;
