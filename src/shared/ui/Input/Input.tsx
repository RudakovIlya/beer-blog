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
}

export const Input = memo(({
  value, onChange, className, ...otherProps
}: PropsWithChildren<Props>) => {
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value)
  }

  return (
    <div className={clsx('', {}, className)}>
      <div>

      </div>
      <input {...otherProps} value={value} onChange={onChangeValue} />
    </div>
  )
})
