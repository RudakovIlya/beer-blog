import { PropsWithChildren } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticleImageBlockComponent.module.scss'

interface Props {
  className?: string
}

export const ArticleImageBlockComponent = ({ className }: PropsWithChildren<Props>) => {
  const { t } = useTranslation()

  return (
    <div className={clsx(cls.ArticleImageBlockComponent, {}, className)}>
    </div>
  )
}
