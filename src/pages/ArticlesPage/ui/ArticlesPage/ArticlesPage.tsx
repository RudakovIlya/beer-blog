import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { memo } from 'react'
import cls from './ArticlesPage.module.scss'

interface Props {

}

const ArticlesPage = (props: Props) => {
  const { t } = useTranslation('articles')

  return (
    <div className={clsx(cls.articles, {})}>
    </div>
  )
}

export default memo(ArticlesPage)
