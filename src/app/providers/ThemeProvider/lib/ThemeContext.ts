import { createContext } from 'react'

export const THEME = {
  LIGHT: 'light',
  DARK: 'dark',
} as const

export type ThemeType = 'light' | 'dark'

export interface IThemeContext {
  theme?: ThemeType
  setTheme?: (theme: ThemeType) => void
}

export const ThemeContext = createContext<IThemeContext>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
