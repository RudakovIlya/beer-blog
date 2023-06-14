import type { Preview } from '@storybook/react'
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator'
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => {
      return (
        <StyleDecorator>
          <Story />
        </StyleDecorator>
      )
    },
    (Story) => {
      const Decorator = ThemeDecorator('light')
      return (
        <Decorator>
          <Story />
        </Decorator>
      )
    },
  ],
}

export default preview
