import { ComponentStory, ComponentMeta } from '@storybook/react'

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Modal } from './Modal'

export default {
  title: 'shared/Modal',
  component: Modal,
  args: {
    children: 'Lorem ipsum dolor sit amet.',
    isOpen: true,
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => { return <Modal {...args} /> }

export const ModalLight = Template.bind({})

ModalLight.args = {
}

export const ModalDark = Template.bind({})

ModalDark.args = {
}

ModalDark.decorators = [ThemeDecorator('dark')]
