import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { CountrySelect } from './CountrySelect'

export default {
  title: 'entities/CountrySelect',
  component: CountrySelect,

} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => {
  return <CountrySelect {...args} />
}

export const SelectLight = Template.bind({})

SelectLight.args = {}

export const SelectDark = Template.bind({})

SelectDark.decorators = [ThemeDecorator('dark')]
