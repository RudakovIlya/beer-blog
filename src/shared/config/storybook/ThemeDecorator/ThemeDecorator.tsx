import 'app/styles/index.scss'
import { Story } from '@storybook/react'
import { ThemeProvider, ThemeType } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: ThemeType) => {
  return (StoryComponent: Story) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div data-theme={theme} className={'app'}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    )
  }
}
