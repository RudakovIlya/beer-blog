import {useContext} from "react";
import {LOCAL_STORAGE_THEME_KEY, THEME, ThemeContext, ThemeType} from "./ThemeContext";

interface UseThemeResult {
  theme: ThemeType
  onChangeTheme: () => void
}

export const useTheme = (): UseThemeResult => {
  const {theme, setTheme} = useContext(ThemeContext)

  const onChangeTheme = () => {
    const newTheme = theme === 'light' ? THEME.DARK : THEME.LIGHT
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    theme,
    onChangeTheme
  }
}