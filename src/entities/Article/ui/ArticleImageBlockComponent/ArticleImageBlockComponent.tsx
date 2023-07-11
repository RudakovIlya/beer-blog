import { memo } from 'react'
import { clsx } from 'shared/lib'
import { Text } from 'shared/ui/Text/Text'
import { ArticleImageBlock } from '../../model/types/article'
import cls from './ArticleImageBlockComponent.module.scss'

interface Props {
  className?: string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ block, className }: Props) => {
  const { src, title } = block
  return (
    <div className={clsx(cls['article-image'], undefined, className)}>
      <img src={src} alt={title} className={cls.img} />
      {title && <Text fontSize={'xs'} className={cls.description}>{title}</Text>}
    </div>
  )
})
