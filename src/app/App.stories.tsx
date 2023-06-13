import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { App } from './App'

export default {
  title: 'app/App',
  component: App,
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = () => { return <App /> }

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator('dark')]
