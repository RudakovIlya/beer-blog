import { memo, useCallback, useEffect } from 'react'
import { clsx } from 'shared/lib'
import { useAppDispatch, useDynamicModuleLoader } from 'shared/hooks'
import { ReducerList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader'
import { useSelector } from 'react-redux'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { SkeletonBrick, SkeletonCircle, SkeletonText } from 'shared/ui/Skeleton'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { AiOutlineCalendar, AiOutlineEye } from 'react-icons/ai'
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent'
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent'
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent'
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/getArticleDetails'
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById'
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice'
import cls from './ArticleDetails.module.scss'
import { ArticleBlock } from '../../model/types/article'

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

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case 'CODE': {
      return <ArticleCodeBlockComponent key={block.id} className={cls.block} block={block} />
    }
    case 'IMAGE': {
      return <ArticleImageBlockComponent key={block.id} className={cls.block} block={block} />
    }
    case 'TEXT': {
      return <ArticleTextBlockComponent key={block.id} className={cls.block} block={block} />
    }
    default: {
      return null
    }
    }
  }, [])

  useDynamicModuleLoader({
    reducers,
    removeAfterUnmount: true,
  })

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id!))
    }
  }, [dispatch, id])

  if (isLoading) {
    return (
      <>
        <SkeletonCircle className={cls.avatar} size={200} />
        <SkeletonBrick width={'30%'} height={30} className={cls.title} />
        <SkeletonBrick width={'70%'} height={30} className={cls.subtitle} />
        <SkeletonText fontSize={'fs'} lineHeight={'lhl'} rows={25} />
      </>
    )
  }

  if (error) {
    return (
      <Text
        as={'h1'}
        fontSize={'fxl'}
        weight={'bold'}
        align={'center'}
        variant={'alert'}
      >
        {t('an error occurred while loading the article')}
      </Text>
    )
  }

  return (
    <div className={clsx(cls['article-details'], undefined, className)}>
      <Avatar
        style={{ fontSize: 'var(--size-text-f5xl)' }}
        inlineSize={200}
        src={article?.img}
        name={article?.author}
        className={cls.avatar}
      />
      <Text as={'h1'} fontSize={'f3xl'} weight={'bold'} className={cls.title}>
        {article?.title}
      </Text>
      <Text as={'p'} fontSize={'fl'} className={cls.subtitle}>
        {article?.subtitle}
      </Text>
      <div className={cls['info-block']}>
        <div className={cls.info}>
          <AiOutlineEye size={20} color={'var(--color-typo-primary)'} />
          <Text as={'p'} lineHeight={'lhl'}>
            {article?.views}
          </Text>
        </div>
        <div className={cls.info}>
          <AiOutlineCalendar size={20} color={'var(--color-typo-primary)'} />
          <Text as={'p'} lineHeight={'lhl'}>
            {article?.createdAt}
          </Text>
        </div>
        <div className={cls.info}>
          <Text as={'p'} fontSize={'fl'} className={cls.subtitle}>
            {t('author')}
            : &nbsp;
            {article?.author}
          </Text>
        </div>
      </div>
      {article?.blocks.map(renderBlock)}
    </div>
  )
})
