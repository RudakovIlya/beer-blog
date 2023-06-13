import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import AboutPage from './AboutPage'

export default {
  title: 'pages/AboutPage',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => { return <AboutPage /> }

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator('dark')]
