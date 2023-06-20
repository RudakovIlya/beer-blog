import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Input } from './Input'

export default {
  title: 'shared/Input',
  component: Input,
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => { return <Input {...args} /> }

export const InputLight = Template.bind({})

InputLight.args = {
}

export const InputDark = Template.bind({})

InputDark.args = {
}

InputDark.decorators = [ThemeDecorator('dark')]
