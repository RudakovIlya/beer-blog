import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ProfileCard } from './ProfileCard'

export default {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  decorators: [StoreDecorator({
    profile: {
      data: {
        first: 'Ilya',
        lastname: 'Rudakov',
      },
    },
  })],
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => { return <ProfileCard {...args} /> }

export const Fulfilled = Template.bind({})

Fulfilled.args = {
}

export const Empty = Template.bind({})

Empty.decorators = [ThemeDecorator('dark')]
