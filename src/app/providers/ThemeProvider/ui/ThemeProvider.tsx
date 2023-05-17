import {FC, useMemo, useState} from 'react'
import {LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext, ThemeType} from "../lib/ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemeType || THEME.LIGHT

export const ThemeProvider: FC = ({children}) => {
  const [theme, setTheme] = useState<ThemeType>(defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme, setTheme])

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  )
};