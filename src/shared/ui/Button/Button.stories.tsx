import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Button } from './Button'

export default {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Button',
    type: 'button',
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => { return <Button {...args} /> }

export const Primary = Template.bind({})

Primary.args = {
  variant: 'primary',
}

export const Clear = Template.bind({})

Clear.args = {
  variant: 'clear',
}

export const Outline = Template.bind({})

Outline.args = {
  variant: 'outline',
}

export const OutlineSmall = Template.bind({})

OutlineSmall.args = {
  variant: 'outline',
  size: 'small',
}
export const OutlineMedium = Template.bind({})

OutlineMedium.args = {
  variant: 'outline',
  size: 'medium',
}
export const OutlineLarge = Template.bind({})

OutlineLarge.args = {
  variant: 'outline',
  size: 'large',
}
export const OutlineXLarge = Template.bind({})

OutlineXLarge.args = {
  variant: 'outline',
  size: 'x-large',
}

export const BackgroundTheme = Template.bind({})

BackgroundTheme.args = {
  background: 'background',
}
export const BackgroundInvertedTheme = Template.bind({})

BackgroundInvertedTheme.args = {
  background: 'background-inverted',
}

export const Small = Template.bind({})

Small.args = {
  size: 'small',
}

export const Medium = Template.bind({})

Medium.args = {
  size: 'medium',
}

export const Large = Template.bind({})

Large.args = {
  size: 'large',
}

export const XLarge = Template.bind({})

XLarge.args = {
  size: 'x-large',
}

export const Square = Template.bind({})

XLarge.args = {
  type: '<',
  square: true,
}

export const OutlineDark = Template.bind({})

OutlineDark.args = {
  type: 'button',
  variant: 'outline',
}

OutlineDark.decorators = [ThemeDecorator('dark')]
