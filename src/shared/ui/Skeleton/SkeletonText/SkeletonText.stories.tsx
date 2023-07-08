import { ComponentStory, ComponentMeta } from '@storybook/react'

import { SkeletonText } from './SkeletonText'

export default {
  title: 'shared/SkeletonText',
  component: SkeletonText,
  args: {},
} as ComponentMeta<typeof SkeletonText>

const Template: ComponentStory<typeof SkeletonText> = (args) => {
  return <SkeletonText {...args} />
}

export const SkeletonTextLight = Template.bind({})

SkeletonTextLight.args = {}

export const SkeletonTextDark = Template.bind({})

SkeletonTextDark.args = {}
