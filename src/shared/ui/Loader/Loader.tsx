import { clsx } from 'shared/lib'
import { memo } from 'react'
import cls from './Loader.module.scss'

type LoaderSize = 'small' | 'medium' | 'large' | 'extra-small'

interface Props {
  size?: LoaderSize
  className?: string
  wrapperClassName?: string
}

export const Loader = memo(({
  size = 'medium',
  wrapperClassName,
  className,
}: Props) => {
  const dotSize = clsx(cls.dot, {}, ...[cls[size], className])
  return (
    <div className={clsx(cls.wrapper, {}, wrapperClassName)}>
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
})
