import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { PageError } from './PageError'

export default {
  title: 'widgets/PageError',
  component: PageError,
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => { return <PageError {...args} /> }

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator('dark')]
