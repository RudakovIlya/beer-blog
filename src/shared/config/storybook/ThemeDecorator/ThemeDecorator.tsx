import 'app/styles/index.scss'
import { Story } from '@storybook/react'
import { ThemeType } from 'app/providers/ThemeProvider'

export const ThemeDecorator = (theme: ThemeType) => {
  return (StoryComponent: Story) => {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    )
  }
}
