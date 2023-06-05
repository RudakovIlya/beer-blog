import { FC } from 'react'
import { clsx } from 'shared/lib'
import cls from './Loader.module.scss'

interface Props {
  className?: string
}

export const Loader: FC<Props> = ({ className }) => {
  return (
    <>
      {
        Array.from(new Array(3))
          .map(() => {
            return (
              <span key={`${Math.random()}`} className={clsx(cls.dot, {}, className)} />
            )
          })
      }
    </>
  )
}
