import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import avatar from 'shared/assets/tests/avatar_image_for_storybook.png'
import { ProfileCard } from './ProfileCard'

const data = {
  first: 'Илья',
  lastname: 'Rudakov',
  age: 24,
  currency: 'EUR',
  country: 'Russia',
  city: 'Abinsk',
  username: 'asap_alh',
}

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  decorators: [StoreDecorator({})],
  args: {
    data,
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => {
  return <ProfileCard {...args} />
}

export const Fulfilled = Template.bind({})

Fulfilled.args = {}

export const Empty = Template.bind({})

Empty.args = {
  data: undefined,
}

Empty.decorators = [ThemeDecorator('dark')]

export const WithError = Template.bind({})

WithError.args = {
  error: 'With Error',
}

export const IsLoading = Template.bind({})

IsLoading.args = {
  isLoading: true,
}

export const Readonly = Template.bind({})

Readonly.args = {
  readOnly: true,
}

export const WithAvatar = Template.bind({})

WithAvatar.args = {
// @ts-ignore
  data: {
    ...data,
    avatar,
  },
}
