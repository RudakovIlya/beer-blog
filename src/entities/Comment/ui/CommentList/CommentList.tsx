import { PropsWithChildren, memo } from 'react'
import { clsx } from 'shared/lib'
import { Text } from 'shared/ui/Text/Text'
import { useTranslation } from 'react-i18next'
import { Comment } from '../../model/types/comment'
import { CommentItem } from '../CommentItem/CommentItem'
import cls from './CommentList.module.scss'

interface Props {
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList = memo((props: PropsWithChildren<Props>) => {
  const {
    comments,
    isLoading,
  } = props

  const { t } = useTranslation('article-details')
  const isNotEmpty = comments?.length

  return (
    <div className={clsx(cls['comment-list'])}>
      {isNotEmpty
        ? comments?.map((comment) => {
          return <CommentItem key={comment.id} isLoading={isLoading} comment={comment} />
        })
        : <Text as={'h2'} weight={'medium'} fontSize={'xl2'}>{t('there are no comments')}</Text>}
    </div>
  )
})
