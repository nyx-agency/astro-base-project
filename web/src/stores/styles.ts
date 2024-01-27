// Path: web/src/stores/styles.ts
import { writable, get } from "svelte/store";

// Función para obtener el modo inicial desde localStorage
const getInitial = () => {
  if (typeof window !== 'undefined') {
    const styles = localStorage.getItem('styles')
    const isDarkMode =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    let stylesObj: any = {
      isDarkMode,
    }
    try {
      stylesObj = JSON.parse(styles) || {
        isDarkMode,
      }

      if (stylesObj.isDarkMode) {
        // document.body.classList.add('dark')
        document.body.classList.add('black')
        document.body.classList.remove('green')
      } else {
        // document.body.classList.remove('dark')
        document.body.classList.remove('black')
        document.body.classList.add('green')
      }
    } catch (e) {
      stylesObj = {
        isDarkMode,
      }
    }
    window.console.log(
      'web/src/stores/styles.ts -> getInitialMode -> stylesObj',
      stylesObj
    )

    return stylesObj
  }
  return {}
}

export const styles = writable({
  ...getInitial(),
})

const setValueLocalStorage = (key: string, value: any) => {
  if (typeof window !== 'undefined') {
    const styles = localStorage.getItem('styles')
    let stylesObj: any = {}
    try {
      stylesObj = JSON.parse(styles) || {}
    } catch (e) {
      stylesObj = {}
    }
    stylesObj[key] = value
    localStorage.setItem('styles', JSON.stringify(stylesObj))
  }
}

export const toggleMode = () => {
  styles.update((s) => {
    const isDarkMode = !s.isDarkMode
    s.isDarkMode = isDarkMode
    if (typeof window !== 'undefined') {
      // document.body.classList.toggle('dark', isDarkMode);
      document.documentElement.style.setProperty(
        '--theme-mode',
        isDarkMode ? 'black' : 'green'
      )

      if (isDarkMode) {
        document.body.classList.add('black')
        document.body.classList.remove('green')
      } else {
        document.body.classList.remove('black')
        document.body.classList.add('green')
      }
      setValueLocalStorage('isDarkMode', isDarkMode)
    }
    return s
  })
}

export const setMode = (mode: boolean) => {
  styles.set({ ...get(styles), isDarkMode: mode })
  if (typeof window !== 'undefined') {
    if (mode) {
      document.body.classList.add('black')
      document.body.classList.remove('green')
    } else {
      document.body.classList.remove('black')
      document.body.classList.add('green')
    }
    setValueLocalStorage('isDarkMode', mode)
  }
}

export const getMode = () => {
  const currentStyles = get(styles);
  return !!currentStyles.isDarkMode;
};
