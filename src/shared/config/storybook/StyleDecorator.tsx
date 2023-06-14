import 'app/styles/index.scss'
import { PropsWithChildren } from 'react'

export const StyleDecorator = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
    </>
  )
}
