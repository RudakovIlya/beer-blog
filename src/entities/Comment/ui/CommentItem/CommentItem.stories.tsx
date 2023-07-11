import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { CommentItem } from './CommentItem'

export default {
  title: 'entities/Comment/CommentItem',
  component: CommentItem,
  args: {
    comment: {
      id: '1',
      user: { id: '1', username: 'Timur Ulbi' },
      text: 'Comment text Hello world',
    },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof CommentItem>

const Template: ComponentStory<typeof CommentItem> = (args) => {
  return <CommentItem {...args} />
}

export const CommentItemDefault = Template.bind({})

CommentItemDefault.args = {}

export const CommentItemIsLoading = Template.bind({})

CommentItemIsLoading.args = {
  isLoading: true,
}
