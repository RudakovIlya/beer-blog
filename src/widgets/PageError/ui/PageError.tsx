import { FC } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import cls from './PageError.module.scss'

interface Props {
  className?: string
}

export const PageError: FC<Props> = ({ className }) => {
  const { t } = useTranslation()

  const onReload = () => {
    window.location.reload()
  }

  return (
    <div className={clsx(cls.error, {}, className)}>
      <Text as={'h1'}>{t('An unexpected error has occurred')}</Text>
      <Button variant={'secondary'} onClick={onReload}>{t('Refresh the page')}</Button>
    </div>
  )
}
