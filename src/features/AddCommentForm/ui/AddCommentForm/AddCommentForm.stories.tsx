import { ComponentStory, ComponentMeta } from '@storybook/react'

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { action } from '@storybook/addon-actions'
import AddCommentForm from './AddCommentForm'

export default {
  title: 'features/AddCommentForm',
  component: AddCommentForm,
  args: {
    onSubmit: action('onSubmit'),
  },
  decorators: [StoreDecorator({
    addCommentForm: {
    },
  })],
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = (args) => {
  return <AddCommentForm {...args} />
}

export const AddCommentFormDefault = Template.bind({})

AddCommentFormDefault.args = {}

export const AddCommentFormIsLoading = Template.bind({})

AddCommentFormIsLoading.args = {
  isLoading: true,
}
