import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticlesDetailsPage from './ArticlesDetailsPage'

export default {
  title: 'pages/ArticlesDetailsPage',
  component: ArticlesDetailsPage,
  args: {},
} as ComponentMeta<typeof ArticlesDetailsPage>

const Template: ComponentStory<typeof ArticlesDetailsPage> = (args) => {
  return <ArticlesDetailsPage {...args} />
}

export const ArticlesDetailsPageLight = Template.bind({})

ArticlesDetailsPageLight.args = {}

export const ArticlesDetailsPageDark = Template.bind({})

ArticlesDetailsPageDark.args = {}
