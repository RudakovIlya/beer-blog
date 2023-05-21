import { ButtonHTMLAttributes, FC } from 'react'
import { clsx } from 'shared/lib'
import cls from './Button.module.scss'

type ButtonVariant = 'clear' | 'icon' | 'primary' | 'secondary' | 'outline'
type ButtonSize = 'small' | 'medium' | 'large'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
}

export const Button: FC<Props> = (props) => {
  const {
    className, variant = 'primary', size = 'medium', children, ...otherProps
  } = props

  const additionalClasses = [cls[variant], cls[size], className]

  return (
    <button {...otherProps} className={clsx(cls.button, {}, ...additionalClasses)}>
      {children}
    </button>
  )
}
