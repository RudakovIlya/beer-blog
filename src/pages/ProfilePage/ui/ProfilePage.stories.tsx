import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import ProfilePage from './ProfilePage'

const data = {
  first: 'Илья',
  lastname: 'Rudakov',
  age: 24,
  currency: 'EUR',
  country: 'Russia',
  city: 'Abinsk',
  username: 'asap_alh',
  avatar: '',
}

export default {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  decorators: [StoreDecorator({
    profile: {
      // @ts-ignore
      form: data,
    },
  })],
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => {
  return <ProfilePage />
}

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator('dark')]
