import { FC } from 'react'
import { clsx } from 'shared/lib'
import cls from './Loader.module.scss'

type LoaderSize = 'small' | 'medium' | 'large' | 'extra-small'

interface Props {
  size?: LoaderSize
  className?: string
}

export const Loader: FC<Props> = ({ size = 'medium', className }) => {
  const dotSize = clsx(cls.dot, {}, ...[cls[size], className])
  return (
    <div className={clsx(cls.wrapper)}>
      {
        Array.from(new Array(3))
          .map(() => {
            return (
              <span key={`${Math.random()}`} className={dotSize} />
            )
          })
      }
    </div>
  )
}
