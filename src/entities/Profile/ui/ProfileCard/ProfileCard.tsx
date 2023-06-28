import { PropsWithChildren } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import cls from './ProfileCard.module.scss'

interface Props {
  className?: string
}

export const ProfileCard = ({ className }: PropsWithChildren<Props>) => {
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileData)
  const isLoading = useSelector(getProfileIsLoading)
  const error = useSelector(getProfileError)

  return (
    <section className={clsx(cls.card, {}, className)}>
      <header>
        <Text as={'h1'}>
          {t('profile')}
        </Text>
        <Button variant={'secondary'}>
          {t('edit')}
        </Button>
      </header>
      <div className={cls.data}>
        <Input value={data?.first} placeholder={t('your name')} className={cls.input} />
        <Input value={data?.lastname} placeholder={t('your last name')} className={cls.input} />
      </div>
    </section>
  )
}
