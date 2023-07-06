import { memo, useEffect } from 'react'
import { clsx } from 'shared/lib'
import { useAppDispatch, useDynamicModuleLoader } from 'shared/hooks'
import { ReducerList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { SkeletonCircle, SkeletonText } from 'shared/ui/Skeleton'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import cls from './ArticleDetails.module.scss'

interface Props {
  id: string
  className?: string
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails = memo(({
  id,
  className,
}: Props) => {
  const { t } = useTranslation('article-details')

  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const error = useSelector(getArticleDetailsError)
  const article = useSelector(getArticleDetailsData)

  useDynamicModuleLoader({
    reducers,
    removeAfterUnmount: true,
  })

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id!))
    }
  }, [dispatch, id])

  if (1) {
    return (
      <>
        <SkeletonCircle className={cls['skeleton-avatar']} size={200} />
        <SkeletonText fontSize={'xl'} lineHeight={'l'} rows={25} />
      </>
    )
  }

  if (error) {
    return (
      <Text
        as={'h1'}
        fontSize={'xl'}
        weight={'bold'}
        align={'center'}
        variant={'alert'}
      >
        {t('an error occurred while loading the article')}
      </Text>
    )
  }

  return (
    <div className={clsx(cls['article-details'], {}, className)}>
    </div>
  )
})
