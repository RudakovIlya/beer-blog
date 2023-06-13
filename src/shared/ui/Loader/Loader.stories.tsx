import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Loader } from './Loader'

export default {
  title: 'shared/Loader',
  component: Loader,
  args: {
    className: 'storybook-loader-class',
  },
} as ComponentMeta<typeof Loader>

const Template: ComponentStory<typeof Loader> = (args) => { return <Loader {...args} /> }

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})

Dark.args = {
}

Dark.decorators = [ThemeDecorator('dark')]
