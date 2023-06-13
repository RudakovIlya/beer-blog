import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Sidebar } from './Sidebar'

export default {
  title: 'widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => { return <Sidebar {...args} /> }

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator('dark')]
