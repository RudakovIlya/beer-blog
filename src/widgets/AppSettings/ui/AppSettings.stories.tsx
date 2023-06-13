import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppSettings } from './AppSettings'

export default {
  title: 'widgets/AppSettings',
  component: AppSettings,
} as ComponentMeta<typeof AppSettings>

const Template: ComponentStory<typeof AppSettings> = (args) => { return <AppSettings {...args} /> }

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator('dark')]
