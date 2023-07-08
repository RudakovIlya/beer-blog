import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Code } from './Code'

export default {
  title: 'shared/Code',
  component: Code,
  args: {},
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => {
  return <Code {...args} />
}

export const CodeDefault = Template.bind({})

CodeDefault.args = {
  children: `import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Code } from './Code'

export default {
  title: 'shared/Code',
  component: Code,
  args: {},
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => {
  return <Code {...args} />
}

export const CodeDefault = Template.bind({})`,
}
