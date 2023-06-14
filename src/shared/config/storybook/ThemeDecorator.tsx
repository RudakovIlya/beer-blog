import 'app/styles/index.scss'
import { PropsWithChildren } from 'react'
import { ThemeType } from 'app/providers/ThemeProvider/lib/ThemeContext'

export const ThemeDecorator = (theme: ThemeType) => {
  return ({ children }: PropsWithChildren) => {
    return (
      <div className={`app ${theme}`}>
        {children}
      </div>
    )
  }
}
