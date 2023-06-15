import { createPortal } from 'react-dom'
import { PropsWithChildren } from 'react'

interface Props {
  element?: HTMLElement
}

export const Portal = ({ element = document.body, children }: PropsWithChildren<Props>) => {
  return createPortal(children, element)
}
