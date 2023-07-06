import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { SkeletonCircle } from './SkeletonCircle'

export default {
  title: 'shared/SkeletonCircle',
  component: SkeletonCircle,
  args: {},
} as ComponentMeta<typeof SkeletonCircle>

const Template: ComponentStory<typeof SkeletonCircle> = (args) => {
  return <SkeletonCircle {...args} />
}

export const SkeletonCircleLight = Template.bind({})

SkeletonCircleLight.args = {}

export const SkeletonCircleDark = Template.bind({})

SkeletonCircleDark.args = {}
