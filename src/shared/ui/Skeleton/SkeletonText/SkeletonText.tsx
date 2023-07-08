import { memo } from 'react'
import { clsx } from 'shared/lib'
import { TextPropLineHeight, TextPropSize } from 'shared/ui/Text/Text'
import { SkeletonBrick } from '../SkeletonBrick/SkeletonBrick'
import cls from './SkeletonText.module.scss'

interface Props {
  className?: string;
  rows: number;
  fontSize?: TextPropSize;
  lineHeight?: TextPropLineHeight;
}

const getRowWidth = (index: number, total: number) => {
  if (index === total - 1) {
    return '50%'
  }

  switch (index % 3) {
  case 0:
    return '100%'
  case 1:
    return '85%'
  case 2:
    return '93%'
  default:
    return '100%'
  }
}

export const SkeletonText = memo((props: Props) => {
  const {
    fontSize = 'm',
    lineHeight = 'm',
    className,
    rows = 1,
  } = props

  const varFontSize = `var(--size-text-${fontSize})`
  const varLineHeight = `var(--line-height-text-${lineHeight})`

  return (
    <div key={rows} className={clsx(cls['skeleton-text'], undefined, className)}>
      {new Array(rows).fill(null).map((_, i) => {
        return (
          <div
            key={i}
            className={cls.row}
            style={{ fontSize: varFontSize, height: varLineHeight }}
          >
            <SkeletonBrick width={getRowWidth(i, rows)} height={varFontSize} />
          </div>
        )
      })}
    </div>
  )
})
