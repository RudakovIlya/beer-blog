import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import LoginForm from './LoginForm'
import cls from './LoginForm.module.scss'

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  decorators: [StoreDecorator({
    login: {
      username: 'admin',
      password: '123',
    },
  })],
  args: {
    className: cls.story,
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => { return <LoginForm {...args} /> }

export const Light = Template.bind({})

Light.args = {
}

export const LightWithLoading = Template.bind({})

LightWithLoading.decorators = [StoreDecorator({
  login: {
    username: 'admin',
    password: '123',
    isLoading: true,
  },
})]

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator('dark')]

export const DarkWithError = Template.bind({})

DarkWithError.args = {

}

DarkWithError.decorators = [ThemeDecorator('dark'), StoreDecorator({
  login: {
    username: 'admin',
    password: '123',
    error: 'Error',
  },
})]
