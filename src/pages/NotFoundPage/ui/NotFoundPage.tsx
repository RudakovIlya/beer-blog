import { FC } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import cls from './NotFoundPage.module.scss'

interface Props {
  className?: string
}

export const NotFoundPage: FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <Text className={clsx(cls['not-found'], {}, className)}>{t('Page not found!')}</Text>
  )
}
