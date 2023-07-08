import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkeletonCircle } from './SkeletonCircle'

export default {
  title: 'shared/SkeletonCircle',
  component: SkeletonCircle,
  args: {
    size: '50px',
  },
  argTypes: {
    size: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof SkeletonCircle>

const Template: ComponentStory<typeof SkeletonCircle> = (args) => {
  return <SkeletonCircle {...args} />
}

export const SkeletonCircleDefault = Template.bind({})

SkeletonCircleDefault.args = {}
