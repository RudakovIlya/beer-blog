import { FC } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

interface Props {
  className?: string
}

export const PageError : FC<Props> = ({ className }) => {
  const { t } = useTranslation()

  const onReload = () => {
    window.location.reload()
  }

  return (
    <div className={clsx('', {}, className)}>
      <h1>{t('An unexpected error has occurred')}</h1>
      <Button onClick={onReload}>{t('Refresh the page')}</Button>
    </div>
  )
}
