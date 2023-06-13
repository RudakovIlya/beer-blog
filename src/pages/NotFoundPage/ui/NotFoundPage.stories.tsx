import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { NotFoundPage } from './NotFoundPage'

export default {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = () => { return <NotFoundPage /> }

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator('dark')]
