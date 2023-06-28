import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppNavLink } from './AppNavLink'

export default {
  title: 'shared/AppNavLink',
  component: AppNavLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppNavLink>

const Template: ComponentStory<typeof AppNavLink> = (args) => { return <AppNavLink {...args} /> }

export const Primary = Template.bind({})

Primary.args = {
  children: 'NavLink',
}

Primary.decorators = [ThemeDecorator('dark')]

export const Secondary = Template.bind({})

Secondary.args = {
  children: 'NavLink',
}
