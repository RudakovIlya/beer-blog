import {
  useCallback, useContext, useEffect,
} from 'react'
import {
  LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext, ThemeType,
} from './ThemeContext'

interface UseThemeResult {
  theme: ThemeType
  onChangeTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const {
    theme,
    setTheme,
  } = useContext(ThemeContext)
  const onChangeTheme = useCallback(() => {
    let newTheme: ThemeType = theme!

    switch (newTheme) {
    case THEME.DARK: {
      newTheme = THEME.LIGHT
      break
    }
    case THEME.LIGHT: {
      newTheme = THEME.ORANGE
      break
    }
    case THEME.ORANGE: {
      newTheme = THEME.DARK
      break
    }
    default: {
      newTheme = THEME.LIGHT
      break
    }
    }

    setTheme?.(newTheme)

    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }, [setTheme, theme])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme || THEME.LIGHT)
  }, [theme])

  return {
    theme: theme || THEME.LIGHT,
    onChangeTheme,
  }
}
