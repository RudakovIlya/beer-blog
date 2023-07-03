import { useTranslation } from 'react-i18next'
import { Select } from 'shared/ui/Select/Select'
import { memo, useCallback } from 'react'
import { COUNTRY, CountryType } from '../../model/const/country'

interface Props {
  readOnly?: boolean
  value?: string
  className?: string
  onChange?: (value: CountryType) => void
}

const options = [
  {
    value: COUNTRY.Russia,
    content: COUNTRY.Russia,
  },
  {
    value: COUNTRY.Ukraine,
    content: COUNTRY.Ukraine,
  },
  {
    value: COUNTRY.Armenia,
    content: COUNTRY.Armenia,
  },
  {
    value: COUNTRY.Belarus,
    content: COUNTRY.Belarus,
  },
  {
    value: COUNTRY.Kazakhstan,
    content: COUNTRY.Kazakhstan,
  },
]

export const CountrySelect = memo((props: Props) => {
  const { t } = useTranslation()
  const {
    value,
    readOnly,
    className,
    onChange,
  } = props

  const onChangeHandler = useCallback((value: string) => {
    onChange?.(value as CountryType)
  }, [onChange])

  return (
    <Select
      className={className}
      readOnly={readOnly}
      value={value}
      onChange={onChangeHandler}
      label={t('specify country')}
      options={options}
    />
  )
})
