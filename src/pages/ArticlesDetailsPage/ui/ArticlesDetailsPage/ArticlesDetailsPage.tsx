import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'

const ArticlesDetailsPage = () => {
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()

  if (!id || Number.isNaN(+id)) {
    return <Text align={'center'} as={'h1'} variant={'caution'}>{t('article not found')}</Text>
  }

  return (
    <ArticleDetails id={id} />
  )
}
export default memo(ArticlesDetailsPage)
