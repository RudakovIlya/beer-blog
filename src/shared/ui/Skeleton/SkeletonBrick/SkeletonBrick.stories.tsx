import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkeletonBrick } from './SkeletonBrick'

export default {
  title: 'shared/SkeletonBrick',
  component: SkeletonBrick,
  args: {},
} as ComponentMeta<typeof SkeletonBrick>

const Template: ComponentStory<typeof SkeletonBrick> = (args) => {
  return <SkeletonBrick {...args} />
}

export const SkeletonBrickLight = Template.bind({})

SkeletonBrickLight.args = {}

export const SkeletonBrickDark = Template.bind({})

SkeletonBrickDark.args = {}
