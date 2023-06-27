import React, {
  ElementType, PropsWithChildren, ComponentProps, memo,
} from 'react'
import { clsx } from 'shared/lib'
import cls from './Text.module.scss'

type TextAlignProps = 'center' | 'left' | 'right'

type TextOwnProps<E extends ElementType = ElementType> = {
  variant?: string
  align?: TextAlignProps
  as?: E
}

type Props<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps>

const defaultElement = 'p'

export const Text = memo(<E extends ElementType = typeof defaultElement>({
  as,
  variant,
  align = 'left',
  className,
  children,
  ...otherProps
}: PropsWithChildren<Props<E>>) => {
  const additionalClasses = [cls[align], className]

  const TagName = as || defaultElement
  return (
    <TagName {...otherProps} className={clsx(cls.text, {}, ...additionalClasses)}>
      {children}
    </TagName>
  )
})
