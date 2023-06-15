import 'app/styles/storybook/storybook.scss'
import { Story } from '@storybook/react'

export const StyleDecorator = (story: () => Story) => {
  return story()
}
