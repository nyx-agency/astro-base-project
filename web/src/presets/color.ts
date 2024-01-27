// Path: web/src/presets/color.ts

import { definePreset } from "unocss";

function getAvailableThemesForColor(
  colorName: string,
  themes: Record<string, { alias: string; palette: ColorPalette }>
): string[] {
  const [category, property] = colorName.split('-')

  const checkColor = (
    palette: ColorPalette,
    category: string,
    property: string
  ): boolean => {
    const colorCategory = palette[category as keyof ColorPalette]
    return (
      colorCategory &&
      colorCategory[property as keyof typeof colorCategory] !== undefined
    )
  }

  return Object.keys(themes).filter((theme) =>
    checkColor(themes[theme].palette, category, property)
  )
}

function getColorFromThemes(
  colorName: string,
  themes: Record<string, { alias: string; palette: ColorPalette }>,
  mode: string
): string | undefined {
  const [category, property] = colorName.split('-')
  const theme = themes[mode]

  if (!theme) {
    console.warn(`Theme '${mode}' not found.`)
    return undefined
  }

  const colorCategory = theme.palette[category as keyof ColorPalette]
  if (!colorCategory) {
    console.warn(`Category '${category}' not found in theme '${mode}'.`)
    return undefined
  }

  const colorValue = colorCategory[property as keyof typeof colorCategory]
  if (!colorValue) {
    console.warn(
      `Property '${property}' not found in category '${category}' for theme '${mode}'.`
    )
    return undefined
  }

  return colorValue
}

// https://unocss.dev/config/presets#presets
export default definePreset((params?: PresetParams) => {
  const { selectorName = 'nyx-color2', options = {} } = params || {}

  const { themes = {} } = options

  const listTypes: string[] = ['bg', 'text', 'border', 'fill', 'stroke']

  const listTypesRegex = listTypes.join('|')

  const typeAliases: Record<string, string> = {
    bg: 'background-color',
    text: 'color',
    border: 'border-color',
    fill: 'fill',
    stroke: 'stroke',
  }

  return {
    name: selectorName,
    shortcuts: [
      [
        new RegExp(`^${selectorName}-(${listTypesRegex})-(.+)$`),
        ([, type, colorName]) => {
          const typeAlias = typeAliases[type]
          if (!typeAlias) {
            return ''
          }

          const availableThemes = getAvailableThemesForColor(colorName, themes)
          if (availableThemes.length === 0) {
            console.warn(`Color '${colorName}' not found in any theme.`)
            return ''
          }

          return availableThemes
            .map((theme) => {
              const alias = themes[theme].alias || theme
              return `${alias}:${selectorName}-v-${type}-${colorName}`
            })
            .join(' ')
        },
      ],
    ],
    rules: [
      [
        new RegExp(`^${selectorName}-v-(${listTypesRegex})-(.+)-(.+)$`),
        ([, type, colorName, theme]) => {
          const typeAlias = typeAliases[type]
          if (!typeAlias) {
            return {}
          }

          const color = getColorFromThemes(colorName, themes, theme)
          if (!color) {
            return {}
          }

          return {
            [typeAlias]: color,
          }
        },
      ],
    ],
  }
})
