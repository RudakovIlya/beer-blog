import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Navbar } from './Navbar'

export default {
  title: 'widgets/Navbar',
  component: Navbar,
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => { return <Navbar {...args} /> }

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator('dark')]
