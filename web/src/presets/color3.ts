// Path: web/src/presets/color.ts

import { definePreset } from 'unocss'

// https://unocss.dev/config/presets#presets
export default definePreset((params?: PresetParams) => {
  const { selectorName = 'nyx-color3', options = {} } = params || {}
  console.log('COLOR V3 definePreset')
  console.log('selectorName', selectorName)

  const { themes = {} } = options

  const listTypes = ['text']
  const listTypesRegex = listTypes.join('|')

  const themeVariants: Array<any> = []
  const listThemesNames: string[] = []
  for (const theme in themes) {
    const { alias } = themes[theme] || {}
    listThemesNames.push(alias)
    // themeVariants.push((matcher) => {
    //   if (!matcher.startsWith(`${alias}:`)) return matcher
    //   return {
    //     matcher: matcher.slice(`${alias}:`.length),
    //     selector: (s) => `${alias}\\:${s}`,
    //   }
    // })
    themeVariants.push((matcher) => {
      if (!matcher.startsWith(`${alias}:`)) return matcher
      return {
        matcher: matcher.slice(`${alias}:`.length),
        selector: (s) => {
          console.log('selector', s)
          const selector = `.${alias} ${s}`
          console.log('return selector', selector)
          return selector
        },
      }
    })
  }

  return {
    name: selectorName,
    shortcuts: [
      [
        new RegExp(`^${selectorName}-(${listTypesRegex})-(.+)$`),
        ([, type, colorName]) => {
          console.log('shortcuts -> type, colorName', type, colorName)
          const shortcuts: string = listThemesNames
            .map((theme) => {
              return `${theme}:${selectorName}-v-${type}-${colorName}-${theme}`
            })
            .join(' ')
          console.log('shortcuts -> shortcuts', shortcuts)
          return shortcuts
        },
      ],
    ],
    rules: [
      [
        new RegExp(`^${selectorName}-v-(${listTypesRegex})-(.+)-(.+)$`),
        ([, type, colorName, theme]) => {
          console.log('rules -> ', {
            type,
            colorName,
            theme,
          })
          console.log('rules -> ', {
            color: theme === 'green' ? 'green' : 'red',
          })
          return {
            color: theme === 'green' ? 'green' : 'red',
          }
        },
      ],
    ],
    variants: themeVariants,
  }
})
