import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { PageLoader } from './PageLoader'

export default {
  title: 'widgets/PageLoader',
  component: PageLoader,
} as ComponentMeta<typeof PageLoader>

const Template: ComponentStory<typeof PageLoader> = (args) => { return <PageLoader {...args} /> }

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator('dark')]
