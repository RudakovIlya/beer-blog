import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Avatar } from './Avatar'

export default {
  title: 'shared/Avatar',
  component: Avatar,
  args: {
    name: 'Ilya Rudakov',
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => { return <Avatar {...args} /> }

export const Primary = Template.bind({})

Primary.args = {
  name: 'Ilya Rudakov',
}

Primary.decorators = [ThemeDecorator('dark')]

export const Secondary = Template.bind({})

Secondary.args = {
}
