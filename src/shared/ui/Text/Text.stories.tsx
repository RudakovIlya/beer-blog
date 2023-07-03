import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Text } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet.',
  },
  argTypes: {
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'label', 'span'],
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => {
  return (<Text {...args} />)
}

export const Primary = Template.bind({})

Primary.args = {}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator('dark')]
