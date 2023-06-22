import { ButtonHTMLAttributes, FC } from 'react'
import { clsx } from 'shared/lib'
import cls from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'clear' | 'ghost'

type ButtonSize = 'small' | 'medium' | 'large' | 'x-large'

type ButtonWidth = 'default' | 'full'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  width?: ButtonWidth
  className?: string
}

export const Button: FC<Props> = (props) => {
  const {
    className,
    width = 'default',
    variant = 'primary',
    size = 'medium',
    children,
    ...otherProps
  } = props

  const additionalClasses: string[] = [cls[variant], cls[width], className]
  const mods = {
    [cls[size]]: size,
  }
  return (
    <button {...otherProps} className={clsx(cls.button, mods, ...additionalClasses)}>
      {children}
    </button>
  )
}
