import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { CurrencySelect } from './CurrencySelect'

export default {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,

} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => {
  return <CurrencySelect {...args} />
}

export const SelectLight = Template.bind({})

SelectLight.args = {}

export const SelectDark = Template.bind({})

SelectDark.decorators = [ThemeDecorator('dark')]
