import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => { return <Button {...args} /> }

export const Primary = Template.bind({})

Primary.args = {
  type: 'button',
  children: 'Primary',
  variant: 'primary',
}

export const Clear = Template.bind({})

Clear.args = {
  type: 'button',
  children: 'Clear',
  variant: 'clear',
}

export const Outline = Template.bind({})

Outline.args = {
  type: 'button',
  children: 'Outline',
  variant: 'outline',
}

export const OutlineDark = Template.bind({})

OutlineDark.args = {
  type: 'button',
  children: 'Outline Dark',
  variant: 'outline',
}

OutlineDark.decorators = [ThemeDecorator('dark')]
