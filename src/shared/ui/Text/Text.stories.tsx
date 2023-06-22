import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Text } from './Text'

export default {
  title: 'shared/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet.',
  },
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => {
  return (<Text {...args} />)
}

export const Primary = Template.bind({})

Primary.args = {}
