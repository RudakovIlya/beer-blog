import { memo } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import cls from './ArticlesDetailsPage.module.scss'

interface Props {
  className?: string
}

const ArticlesDetailsPage = ({ className }: Props) => {
  const { t } = useTranslation('article-details')

  return (
    <div className={clsx(cls.articles, {}, className)}>
      ArticlesDetailsPage
    </div>
  )
}
export default memo(ArticlesDetailsPage)
