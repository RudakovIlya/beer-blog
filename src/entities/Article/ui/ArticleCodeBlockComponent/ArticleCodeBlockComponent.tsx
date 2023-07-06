import { PropsWithChildren } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticleCodeBlockComponent.module.scss'

interface Props {
  className?: string
}

export const ArticleCodeBlockComponent = ({ className }: PropsWithChildren<Props>) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(cls.ArticleCodeBlockComponent, {}, className)}>
    </div>
  )
}
