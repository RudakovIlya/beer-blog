import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Select } from './Select'

export default {
  title: 'shared/Select',
  component: Select,
  args: {
    label: 'Select values',
    options: [
      { value: 'first value', content: 'First content' },
      { value: 'second value', content: 'Second content' },
    ],
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => {
  return <Select {...args} />
}

export const SelectLight = Template.bind({})

SelectLight.args = {}

export const SelectDark = Template.bind({})

SelectDark.decorators = [ThemeDecorator('dark')]
