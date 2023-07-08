import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkeletonBrick } from './SkeletonBrick'

export default {
  title: 'shared/SkeletonBrick',
  component: SkeletonBrick,
  args: {
    width: '100%',
    height: '50px',
  },
  argTypes: {
    height: {
      control: { type: 'text' },
    },
    width: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof SkeletonBrick>

const Template: ComponentStory<typeof SkeletonBrick> = (args) => {
  return <SkeletonBrick {...args} />
}

export const SkeletonBrickDefault = Template.bind({})

SkeletonBrickDefault.args = {}
