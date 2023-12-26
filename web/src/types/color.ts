// Path: web/src/types/colors.ts

export type ListColorType =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "1000";
export type ListColorClass = Record<string, string>;

export type PalleteType =
  | "grey"
  | "neutral"
  | "info"
  | "alert"
  | "success"
  | "error"
  | "shades";
export type PalleteClass = Record<PalleteType, ListColorClass>;

export type ThemeOption = "primary" | "secondary";
export type ThemeType = "green" | "yellow";
export type ThemeClass = Record<ThemeType, Record<ThemeOption, string>>;
