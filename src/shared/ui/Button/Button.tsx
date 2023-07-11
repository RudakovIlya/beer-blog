import {
  ButtonHTMLAttributes, memo, PropsWithChildren,
} from 'react'
import { clsx } from 'shared/lib'
import { Loader } from 'shared/ui/Loader/Loader'
import cls from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'clear' | 'ghost'

type ButtonSize = 'small' | 'medium' | 'large' | 'x-large'

type ButtonWidth = 'default' | 'full'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  width?: ButtonWidth
  className?: string
  isLoading?: boolean
  disabled?: boolean
  isCancel?: boolean
}

export const Button = memo((props: PropsWithChildren<Props>) => {
  const {
    className,
    width = 'default',
    variant = 'primary',
    size = 'medium',
    isLoading,
    disabled,
    isCancel,
    children,
    ...otherProps
  } = props

  const additionalClasses: Array<string | undefined> = [cls[variant], cls[width], cls[size], className]

  const mods = {
    [cls.loading]: isLoading,
    [cls.disabled]: disabled,
    [cls.alert]: isCancel,
  }

  return (
    <button
      {...otherProps}
      disabled={disabled}
      className={clsx(cls.button, mods, ...additionalClasses)}
    >
      {children}
      {isLoading && (
        <Loader
          size={'extra-small'}
          className={cls['dot-loader']}
          wrapperClassName={cls['dots-wrapper']}
        />
      )}
    </button>
  )
})
