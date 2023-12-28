// Path: web/src/types/typography.ts


type FontFamilyTypes = "racing-sans-one" | "noto-sans";

type FontFamilyClass = Record<
  FontFamilyTypes,
  {
    "font-family": string;
  }
>;

// Define un tipo para los tamaños de fuente
type FontSizeTypes =
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

type FontSizeClass = Record<
  FontSizeTypes,
  {
    "font-size": string;
  }
>;

// Define un tipo para los pesos de fuente
type FontWeightTypes = "regular" | "semibold" | "bold" | "black";

type FontWeightClass = Record<
  FontWeightTypes,
  {
    "font-weight": string;
  }
>;

// Define un tipo para las alturas de línea
type LineHeightTypes =
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

type LineHeightClass = Record<
  LineHeightTypes,
  {
    "line-height": string;
  }
>;

// Define un tipo para los espacios entre letras
type LetterSpacingTypes =
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

type LetterSpacingClass = Record<
  LetterSpacingTypes,
  {
    "letter-spacing": string;
  }
>;
