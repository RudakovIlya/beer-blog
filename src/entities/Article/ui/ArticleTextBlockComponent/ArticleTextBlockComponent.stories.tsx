import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleTextBlockComponent } from './ArticleTextBlockComponent'

export default {
  title: 'entities/ArticleDetails/ArticleTextBlockComponent',
  component: ArticleTextBlockComponent,
  args: {},
} as ComponentMeta<typeof ArticleTextBlockComponent>

const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => {
  return <ArticleTextBlockComponent {...args} />
}

export const ArticleTextBlockComponentLight = Template.bind({})

ArticleTextBlockComponentLight.args = {}

export const ArticleTextBlockComponentDark = Template.bind({})

ArticleTextBlockComponentDark.args = {}
