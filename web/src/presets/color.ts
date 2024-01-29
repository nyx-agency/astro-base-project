// Path: web/src/presets/color.ts

import { definePreset } from 'unocss'

function getAvailableThemesForColor(
  colorName: string,
  themes: Themes
): string[] {
  const [category, property] = colorName.split('-')

  const checkColor = (
    palette: ColorPalette,
    category: string,
    property: string
  ): boolean => {
    const colorCategory = palette[category as keyof ColorPalette]
    return (colorCategory &&
      colorCategory[property as keyof typeof colorCategory] !==
        undefined) as boolean
  }

  return Object.keys(themes).filter((theme) =>
    checkColor(themes[theme], category, property)
  )
}

function getColorFromThemes(
  colorName: string,
  themes: Themes,
  mode: string
): string | undefined {
  const [category, property] = colorName.split('-')
  const theme = themes[mode]

  if (!theme) {
    console.warn(`Theme '${mode}' not found.`)
    return undefined
  }

  const colorCategory = theme[category as keyof ColorPalette]
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
export default definePreset((params: PresetParams) => {
  const { selectorName = 'nyx-color2', options = {} } = params || {}

  const { themes = {} } = options

  const listTypes: string[] = ['bg', 'text', 'border', 'fill', 'stroke']

  const listTypesRegex = listTypes.join('|')

  const typeColors: Record<string, string> = {
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
          const typeColor = typeColors[type]
          if (!typeColor) {
            return ''
          }

          const availableThemes = getAvailableThemesForColor(colorName, themes)
          if (availableThemes.length === 0) {
            console.warn(`Color '${colorName}' not found in any theme.`)
            return ''
          }

          const classes = availableThemes
            .map((theme) => {
              return `${theme}:${selectorName}-v-${type}-${colorName}-${theme}`
            })
            .join(' ')

          return classes
        },
      ],
    ],
    rules: [
      [
        new RegExp(`^${selectorName}-v-(${listTypesRegex})-(.+)-(.+)$`),
        ([, type, colorName, theme]) => {
          const typeColor = typeColors[type]
          if (!typeColor) {
            return {}
          }

          const color = getColorFromThemes(colorName, themes, theme)
          if (!color) {
            return {}
          }

          return {
            [typeColor]: color,
          }
        },
      ],
    ],
    // https://unocss.dev/config/variants
    variants: Object.keys(themes).map((theme) => {
      const name = themes[theme] || theme
      return (matcher: string) => {
        if (!matcher.startsWith(`${name}:`)) return matcher
        return {
          matcher: matcher.slice(`${name}:`.length),
          selector: (s: string) => `.${name} ${s}`,
        }
      }
    }),
  }
})
