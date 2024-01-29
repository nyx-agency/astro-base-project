// Definición de los tipos para los colores y sus variantes
type ColorVariant = {
  '1'?: string
  '2'?: string
  '3'?: string
  '4'?: string
  '5'?: string
}

interface Color {
  base: string
  lighten?: ColorVariant
  darken?: ColorVariant
  accent?: ColorVariant
}

// Interfaz para el objeto de colores
interface ListColor {
  [key: string]: Color
}

// Definición de tipos para la paleta de colores
interface ColorPaletteItem {
  base: string
  on: string
  container?: string
  onContainer?: string
}

interface ColorPalette {
  primary: ColorPaletteItem
  secondary: ColorPaletteItem
  background?: ColorPaletteItem
  surface?: ColorPaletteItem
}

// Definición de tipos para los temas
interface Themes {
  [key: string]: ColorPalette
}
