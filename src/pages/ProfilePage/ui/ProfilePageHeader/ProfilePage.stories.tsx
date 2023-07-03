import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { ProfilePageHeader } from './ProfilePageHeader'

export default {
  title: 'pages/ProfilePageHeader',
  component: ProfilePageHeader,
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ProfilePageHeader>

const Template: ComponentStory<typeof ProfilePageHeader> = () => {
  return <ProfilePageHeader />
}

export const Light = Template.bind({})

Light.args = {
}

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator('dark')]
