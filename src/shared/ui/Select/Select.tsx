import { clsx } from 'shared/lib'
import { Text } from 'shared/ui/Text/Text'
import { ChangeEvent, memo, useMemo } from 'react'
import cls from './Select.module.scss'

interface SelectOption {
  value: string
  content: string
}

interface Props {
  readOnly?: boolean
  label?: string
  options?: SelectOption[]
  className?: string
  value?: string
  onChange?: (value: string) => void
}

export const Select = memo((props: Props) => {
  const {
    label,
    options = [],
    value,
    readOnly,
    onChange,
    className,
  } = props

  const optionList = useMemo(() => {
    return options.map((option) => {
      return (
        <option key={option.value} value={option.value} className={cls.option}>{option.content}</option>
      )
    })
  }, [options])

  const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(event.currentTarget.value)
  }

  return (
    <div className={clsx(cls.wrapper, {}, className)}>
      {label && (
        <Text className={cls.label} as={'span'}>{label}</Text>
      )}
      <select disabled={readOnly} value={value} onChange={onChangeHandler} className={cls.select}>
        {optionList}
      </select>
    </div>
  )
})
