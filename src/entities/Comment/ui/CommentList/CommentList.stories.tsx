import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { CommentList } from './CommentList'

export default {
  title: 'entities/CommentList',
  component: CommentList,
  args: {
    comments: [
      {
        id: '1',
        user: {
          id: '1',
          username: 'Timur Ulbi',
        },
        text: 'Comment text Hello world',
      },
      {
        id: '2',
        user: { id: '2', username: 'Ilya Rudakov' },
        text: 'Comment text Hello world 2',
      },
    ],
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => {
  return <CommentList {...args} />
}

export const CommentListDefault = Template.bind({})

CommentListDefault.args = {}

export const CommentListIsLoading = Template.bind({})

CommentListIsLoading.args = {
  isLoading: true,
}
