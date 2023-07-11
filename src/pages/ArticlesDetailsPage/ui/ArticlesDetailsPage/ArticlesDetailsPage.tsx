import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'
import { Text } from 'shared/ui/Text/Text'
import { CommentList } from 'entities/Comment'
import { useAppDispatch, useDynamicModuleLoader } from 'shared/hooks'
import { ReducerList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader'
import { useSelector } from 'react-redux'
import { useInitialEffect } from 'shared/hooks/useInitialEffect/useInitialEffect'
import { AddCommentForm } from 'features/AddCommentForm'
import {
  fetchCommentsByArticleId,
} from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailsCommentReducer, getArticleComments } from '../../model/slice/articleDetailsCommentSlice'
import { getCommentsError, getCommentsIsLoading } from '../../model/selectors/comments'
import {
  addCommentForArticle,
} from '../../model/services/addCommentForArticle/addCommentForArticle'
import cls from './ArticlesDetailsPage.module.scss'

const reducers: ReducerList = {
  articleDetailsComments: articleDetailsCommentReducer,
}

const ArticlesDetailsPage = () => {
  const { t } = useTranslation('article-details')
  const { id } = useParams<{ id: string }>()

  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getCommentsIsLoading)
  const error = useSelector(getCommentsError)
  const dispatch = useAppDispatch()

  const onSendComment = useCallback((text: string) => {
    dispatch(addCommentForArticle(text))
  }, [dispatch])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id!))
  })

  useDynamicModuleLoader({
    reducers,
    removeAfterUnmount: true,
  })

  if (!id || Number.isNaN(+id) || error) {
    return <Text align={'center'} as={'h1'} variant={'caution'}>{t('article not found')}</Text>
  }

  return (
    <>
      <ArticleDetails id={id} />
      <Text as={'h2'} className={cls.title} weight={'medium'} fontSize={'xl2'}>{t('comments')}</Text>
      <AddCommentForm onSubmit={onSendComment} isLoading={isLoading} />
      <CommentList comments={comments} isLoading={isLoading} />
    </>
  )
}
export default memo(ArticlesDetailsPage)
