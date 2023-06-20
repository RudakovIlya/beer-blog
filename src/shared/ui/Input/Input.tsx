import {
  ChangeEvent, InputHTMLAttributes, memo, PropsWithChildren,
} from 'react'
import { clsx } from 'shared/lib'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface Props extends HTMLInputProps{
  value?: string
  onChange?: (value: string) => void
  className?: string
  wrapperClassName?: string
}

export const Input = memo(({
  value, onChange, className, wrapperClassName, ...otherProps
}: PropsWithChildren<Props>) => {
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value)
  }

  return (
    <div className={clsx(cls['input-wrapper'], {}, wrapperClassName)}>
      <input
        {...otherProps}
        value={value}
        onChange={onChangeValue}
        className={clsx(cls.input, {}, className)}
      />
    </div>
  )
})
