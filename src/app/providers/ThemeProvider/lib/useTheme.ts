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
    const newTheme = theme === 'light' ? THEME.DARK : THEME.LIGHT

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
