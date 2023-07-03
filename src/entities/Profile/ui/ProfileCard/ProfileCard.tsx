import { PropsWithChildren } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { Loader } from 'shared/ui/Loader/Loader'
import { Avatar } from 'shared/ui/Avatar/Avatar'

import { CurrencySelect, CurrencyType } from 'entities/Currency'
import { CountryType } from 'entities/Country/model/const/country'
import { CountrySelect } from 'entities/Country'
import { Profile } from '../../model/types/profile'
import cls from './ProfileCard.module.scss'

interface Props {
  className?: string
  data?: Profile
  isLoading?: boolean
  error?: string
  readOnly?: boolean
  onChangeFirstname?: (value: string) => void
  onChangeLastname?: (value: string) => void
  onChangeAge?: (value: string) => void
  onChangeCity?: (value: string) => void
  onChangeUsername?: (value: string) => void
  onChangeAvatar?: (value: string) => void
  onChangeCurrency?: (value: CurrencyType) => void
  onChangeCountry?: (value: CountryType) => void
}

export const ProfileCard = (props: PropsWithChildren<Props>) => {
  const {
    data,
    error,
    isLoading,
    readOnly,
    onChangeAge,
    onChangeCity,
    onChangeLastname,
    onChangeFirstname,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency,
    onChangeCountry,
    className,
  } = props
  const { t } = useTranslation('profile')

  if (isLoading) {
    return (
      <div className={clsx(cls.card, { [cls.loading]: isLoading })}>
        <Loader size={'large'} />
      </div>
    )
  }
  if (error) {
    return (
      <div className={clsx(cls.card, {}, cls.error)}>
        <Text as={'h1'} align={'center'} variant={'alert'}>
          {t('An error occurred while loading the profile')}
        </Text>
        <Text as={'p'} align={'center'} variant={'alert'}>
          {t('Try refreshing the page')}
        </Text>
      </div>
    )
  }
  return (
    <section className={clsx(cls.card, { [cls.editing]: !readOnly }, className)}>
      <div className={cls.data}>
        <Avatar
          style={{ font: 'var(--font-xl)' }}
          inlineSize={100}
          name={`${data?.first} ${data?.lastname}`}
          src={data?.avatar}
        />
        <Input
          value={data?.first}
          onChange={onChangeFirstname}
          placeholder={t('your name')}
          wrapperClassName={cls.input}
          readOnly={readOnly}
        />
        <Input
          value={data?.lastname}
          onChange={onChangeLastname}
          placeholder={t('your last name')}
          wrapperClassName={cls.input}
          readOnly={readOnly}
        />
        <Input
          value={data?.age}
          onChange={onChangeAge}
          placeholder={t('your age')}
          wrapperClassName={cls.input}
          readOnly={readOnly}
        />
        <Input
          value={data?.city}
          onChange={onChangeCity}
          placeholder={t('your city')}
          wrapperClassName={cls.input}
          readOnly={readOnly}
        />
        <Input
          value={data?.username}
          onChange={onChangeUsername}
          placeholder={t('your username')}
          wrapperClassName={cls.input}
          readOnly={readOnly}
        />
        <Input
          value={data?.avatar}
          onChange={onChangeAvatar}
          placeholder={t('your avatar link')}
          wrapperClassName={cls.input}
          readOnly={readOnly}
        />
        <CurrencySelect
          className={cls.input}
          readOnly={readOnly}
          value={data?.currency}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          className={cls.input}
          readOnly={readOnly}
          value={data?.country}
          onChange={onChangeCountry}
        />
      </div>
    </section>
  )
}
