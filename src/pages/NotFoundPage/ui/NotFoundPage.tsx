import { FC } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './NotFoundPage.module.scss'

interface Props {
  className?: string
}

export const NotFoundPage: FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <div className={clsx(cls['not-found'], {}, className)}>{t('Page not found!')}</div>
  )
}
