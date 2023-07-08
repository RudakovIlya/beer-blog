import { memo } from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Code } from 'shared/ui/Code/Code'
import cls from './ArticleCodeBlockComponent.module.scss'
import { ArticleCodeBlock } from '../../model/types/article'

interface Props {
  className?: string
  block: ArticleCodeBlock
}

export const ArticleCodeBlockComponent = memo(({ block, className }: Props) => {
  const { t } = useTranslation()
  const { code } = block
  return (
    <div className={clsx(cls['article-code'], {}, className)}>
      <Code>
        {code}
      </Code>
    </div>
  )
})
