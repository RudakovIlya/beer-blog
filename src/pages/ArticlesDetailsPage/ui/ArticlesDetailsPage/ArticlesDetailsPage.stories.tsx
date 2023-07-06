import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticlesDetailsPage from './ArticlesDetailsPage'

export default {
  title: 'pages/ArticlesDetailsPage',
  component: ArticlesDetailsPage,
  args: {},
} as ComponentMeta<typeof ArticlesDetailsPage>

const Template: ComponentStory<typeof ArticlesDetailsPage> = () => {
  return <ArticlesDetailsPage />
}

export const ArticlesDetailsPageLight = Template.bind({})

export const ArticlesDetailsPageDark = Template.bind({})
