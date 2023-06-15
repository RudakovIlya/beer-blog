// import 'app/styles/index.scss'
import 'app/styles/storybook/storybook.scss'
import { Story } from '@storybook/react'
import { ThemeProvider, ThemeType } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: ThemeType) => {
  return (StoryComponent: Story) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    )
  }
}
