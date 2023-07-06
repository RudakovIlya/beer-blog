import { ComponentStory, ComponentMeta } from '@storybook/react'

import ArticlesPage from './ArticlesPage'

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  args: {},
} as ComponentMeta<typeof ArticlesPage>

const Template: ComponentStory<typeof ArticlesPage> = (args) => {
  return <ArticlesPage {...args} />
}

export const ArticlesPageLight = Template.bind({})

ArticlesPageLight.args = {}

export const ArticlesPageDark = Template.bind({})

ArticlesPageDark.args = {}
