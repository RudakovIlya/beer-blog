import { memo } from 'react'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { SkeletonCircle, SkeletonText } from 'shared/ui/Skeleton'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ROUTES_PATHS } from 'app/providers/Router'
import { Comment } from '../../model/types/comment'
import cls from './CommentItem.module.scss'

interface Props {
  comment?: Comment
  isLoading?: boolean
}

export const CommentItem = memo((props: Props) => {
  const { comment, isLoading } = props

  if (isLoading) {
    return (
      <div className={cls.comment}>
        <div className={cls.header}>
          <SkeletonCircle size={32} />
          <SkeletonText />
        </div>
        <SkeletonText />
      </div>
    )
  }

  if (!comment) {
    return null
  }

  const { text, user } = comment

  return (
    <div className={cls.comment}>
      <div className={cls.header}>
        <Avatar form={'round'} name={user.username} src={user.avatar} />
        <AppLink to={`${ROUTES_PATHS.profile + user.id}`}>
          <Text decoration={'underline'}>{user.username}</Text>
        </AppLink>
      </div>
      <Text>{text}</Text>
    </div>
  )
})
