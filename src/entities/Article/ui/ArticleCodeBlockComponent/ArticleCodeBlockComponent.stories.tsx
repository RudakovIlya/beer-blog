import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleCodeBlockComponent } from './ArticleCodeBlockComponent'

export default {
  title: 'entities/ArticleDetails/ArticleCodeBlockComponent',
  component: ArticleCodeBlockComponent,
  args: {},
} as ComponentMeta<typeof ArticleCodeBlockComponent>

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => {
  return <ArticleCodeBlockComponent {...args} />
}

export const ArticleCodeBlockComponentLight = Template.bind({})

ArticleCodeBlockComponentLight.args = {}

export const ArticleCodeBlockComponentDark = Template.bind({})

ArticleCodeBlockComponentDark.args = {}
