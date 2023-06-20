import { ButtonHTMLAttributes, FC } from 'react'
import { clsx } from 'shared/lib'
import cls from './Button.module.scss'

type ButtonVariant = 'clear' | 'clear-inverted' | 'icon' | 'primary' | 'secondary' | 'outline'

type ButtonSize = 'small' | 'medium' | 'large' | 'x-large'

type ButtonBackground = 'background' | 'background-inverted'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  square?: boolean
  background?: ButtonBackground
  className?: string
}

export const Button: FC<Props> = (props) => {
  const {
    className,
    square = false,
    variant = 'primary',
    size = 'medium',
    background,
    children,
    ...otherProps
  } = props

  const additionalClasses: string[] = [cls[variant], cls[background], className]
  const mods = {
    [cls.square]: square,
    [cls[size]]: size,
  }
  return (
    <button {...otherProps} className={clsx(cls.button, mods, ...additionalClasses)}>
      {children}
    </button>
  )
}
