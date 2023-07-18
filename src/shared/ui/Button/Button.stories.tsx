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

export const PrimaryDark = Template.bind({})

PrimaryDark.args = {
  variant: 'primary',
}
PrimaryDark.decorators = [ThemeDecorator('dark')]

export const Secondary = Template.bind({})

Secondary.args = {
  variant: 'secondary',
}

export const SecondaryDark = Template.bind({})

SecondaryDark.args = {
  variant: 'secondary',
}
SecondaryDark.decorators = [ThemeDecorator('dark')]

export const Clear = Template.bind({})

Clear.args = {
  variant: 'clear',
}

export const ClearDark = Template.bind({})

ClearDark.args = {
  variant: 'clear',
}
ClearDark.decorators = [ThemeDecorator('dark')]

export const Ghost = Template.bind({})

Ghost.args = {
  variant: 'ghost',
}

export const GhostDark = Template.bind({})
GhostDark.args = {
  variant: 'ghost',
}
GhostDark.decorators = [ThemeDecorator('dark')]

export const Default = Template.bind({})
Default.args = {
  width: 'default',
}

export const Full = Template.bind({})
Full.args = {
  width: 'full',
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
}

export const IsLoading = Template.bind({})
IsLoading.args = {
  isLoading: true,
}

export const IsLoadingDark = Template.bind({})
IsLoadingDark.args = {
  isLoading: true,
}

IsLoadingDark.decorators = [ThemeDecorator('dark')]
