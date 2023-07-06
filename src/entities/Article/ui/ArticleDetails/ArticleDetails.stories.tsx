import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleDetails } from './ArticleDetails'

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  args: {},
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = (args) => {
  return <ArticleDetails {...args} />
}

export const ArticleDetailsLight = Template.bind({})

ArticleDetailsLight.args = {}

export const ArticleDetailsDark = Template.bind({})

ArticleDetailsDark.args = {}
