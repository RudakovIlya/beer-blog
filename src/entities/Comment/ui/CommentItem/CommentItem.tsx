import { memo } from 'react'
import { Avatar } from 'shared/ui/Avatar/Avatar'
import { Text } from 'shared/ui/Text/Text'
import { SkeletonCircle, SkeletonText } from 'shared/ui/Skeleton'
import { Comment } from '../../model/types/comment'
import cls from './CommentItem.module.scss'

interface Props {
  comment: Comment
  isLoading?: boolean
}

export const CommentItem = memo((props: Props) => {
  const { comment, isLoading } = props
  const { text, user } = comment

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

  return (
    <div className={cls.comment}>
      <div className={cls.header}>
        <Avatar form={'round'} name={user.username} src={user.avatar} />
        <Text>{user.username}</Text>
      </div>
      <Text>{text}</Text>
    </div>
  )
})
