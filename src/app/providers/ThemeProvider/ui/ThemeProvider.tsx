import {
  PropsWithChildren, useMemo, useState,
} from 'react'
import {
  LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext, ThemeType,
} from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || THEME.LIGHT

interface ThemeProviderProps {
  initialTheme?: ThemeType
}

export const ThemeProvider = ({ initialTheme, children }: PropsWithChildren<ThemeProviderProps>) => {
  const [theme, setTheme] = useState<ThemeType>(initialTheme || defaultTheme)

  const defaultProps = useMemo(() => {
    return {
      theme,
      setTheme,
    }
  }, [theme, setTheme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
}
