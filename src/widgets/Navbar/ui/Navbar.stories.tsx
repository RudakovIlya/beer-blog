import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { Navbar } from './Navbar'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => { return <Navbar {...args} /> }

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator('dark')]

export const Authorized = Template.bind({})

Authorized.decorators = [StoreDecorator({
  user: {
    authData: {
      id: '1',
      username: 'admin',
    },
  },
})]

export const Unauthorized = Template.bind({})
Unauthorized.decorators = [ThemeDecorator('dark'), StoreDecorator({})]
