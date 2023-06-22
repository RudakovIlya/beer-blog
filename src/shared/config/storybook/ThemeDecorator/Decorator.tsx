import { ReactNode } from 'react'
import { useTheme } from 'app/providers/ThemeProvider'

export const Decorator = ({ children }: { children: ReactNode }) => {
  const { theme } = useTheme()
  return (
    <div data-theme={theme} className={'app'}>
      {children}
    </div>
  )
}
