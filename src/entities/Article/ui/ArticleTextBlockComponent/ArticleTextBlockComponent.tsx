import { PropsWithChildren } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticleTextBlockComponent.module.scss'

interface Props {
  className?: string
}

export const ArticleTextBlockComponent = ({ className }: PropsWithChildren<Props>) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(cls.ArticleTextBlockComponent, {}, className)}>
    </div>
  )
}
