import { memo } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Text } from 'shared/ui/Text/Text'
import cls from './ArticleTextBlockComponent.module.scss'
import { ArticleTextBlock } from '../../model/types/article'

interface Props {
  block: ArticleTextBlock
  className?: string
}

export const ArticleTextBlockComponent = memo(({ block, className }: Props) => {
  const { t } = useTranslation()
  const { title, paragraphs } = block
  return (
    <section className={clsx(cls['article-text'], {}, className)}>
      {title && <Text as={'h2'} weight={'medium'} fontSize={'f2xl'} className={cls.title}>{title}</Text>}
      {paragraphs.map((paragraph, i) => {
        return <Text key={paragraph} className={cls.paragraph}>{paragraph}</Text>
      })}
    </section>
  )
})
