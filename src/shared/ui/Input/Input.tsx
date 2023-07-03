import {
  ChangeEvent, InputHTMLAttributes, memo, PropsWithChildren,
} from 'react'
import { clsx } from 'shared/lib'
import cls from './Input.module.scss'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>

interface Props extends HTMLInputProps{
  value?: string | number
  onChange?: (value: string) => void
  className?: string
  wrapperClassName?: string
  readOnly?: boolean
}

export const Input = memo(({
  value, onChange, readOnly, className, wrapperClassName, ...otherProps
}: PropsWithChildren<Props>) => {
  const onChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    onChange?.(event.currentTarget.value)
  }

  const mods = {
    [cls.readonly]: readOnly,
  }

  return (
    <div className={clsx(cls['input-wrapper'], {}, wrapperClassName)}>
      <input
        {...otherProps}
        value={value}
        onChange={onChangeValue}
        readOnly={readOnly}
        className={clsx(cls.input, mods, className)}
      />
    </div>
  )
})
