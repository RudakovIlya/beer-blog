import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppLink } from './AppLink'

export default {
  title: 'shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => { return <AppLink {...args} /> }

export const Primary = Template.bind({})

Primary.args = {
  variant: 'primary',
  children: 'Link',
}

export const Secondary = Template.bind({})

Secondary.args = {
  variant: 'secondary',
  children: 'Link',
}

Secondary.decorators = [ThemeDecorator('dark')]
