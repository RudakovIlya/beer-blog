import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { ArticleImageBlockComponent } from './ArticleImageBlockComponent'

export default {
  title: 'entities/ArticleDetails/ArticleImageBlockComponent',
  component: ArticleImageBlockComponent,
  args: {},
} as ComponentMeta<typeof ArticleImageBlockComponent>

const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => {
  return <ArticleImageBlockComponent {...args} />
}

export const ArticleImageBlockComponentLight = Template.bind({})

ArticleImageBlockComponentLight.args = {}

export const ArticleImageBlockComponentDark = Template.bind({})

ArticleImageBlockComponentDark.args = {}
