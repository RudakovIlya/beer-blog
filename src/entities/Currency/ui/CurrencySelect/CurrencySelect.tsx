import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { CURRENCY, CurrencyType } from '../../model/const/currency'

interface Props {
  readOnly?: boolean
  value?: string
  className?: string
  onChange?: (value: CurrencyType) => void
}

const options = [
  {
    value: CURRENCY.RUB,
    content: CURRENCY.RUB,
  },
  {
    value: CURRENCY.USD,
    content: CURRENCY.USD,
  },
  {
    value: CURRENCY.EUR,
    content: CURRENCY.EUR,
  },
]

export const CurrencySelect = memo((props: Props) => {
  const { t } = useTranslation()
  const {
    value,
    readOnly,
    className,
    onChange,
  } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as CurrencyType)
  }, [onChange])

  return (
    <Select
      className={className}
      readOnly={readOnly}
      value={value}
      onChange={onChangeHandler}
      label={t('specify currency')}
      options={options}
    />
  )
})
