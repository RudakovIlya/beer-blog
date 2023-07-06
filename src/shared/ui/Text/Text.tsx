import React, {
  ElementType, PropsWithChildren, ComponentProps, memo,
} from 'react'
import { clsx } from 'shared/lib'
import cls from './Text.module.scss'

export type TextPropAlign = 'left' | 'center' | 'right';

export type TextPropCursor = 'pointer' | 'none'

export type TextPropDecoration = 'underline' | 'none'

export type TextPropLineHeight = '2xs' | 'xs' | 's' | 'm' | 'l';

export type TextPropSize =
  's' |
  'xs' |
  'f2xs' |
  'm' |
  'l' |
  'xl' |
  'f2xl' |
  'f3xl' |
  'f4xl' |
  'f5xl' |
  'f6xl'

export type TextPropSpacing = 'xs' | 's' | 'm' | 'l'

export type TextPropVariant = 'primary' |
  'secondary' |
  'brand' |
  'ghost' |
  'link' |
  'linkMinor' |
  'system' |
  'normal' |
  'success' |
  'warning' |
  'alert' |
  'caution' |
  'critical'

export type TextPropWeight = 'thin' |
  'light' |
  'regular' |
  'medium' |
  'semibold' |
  'bold' |
  'black'

export type TextPropTransform = 'uppercase' | 'lowercase'

export type TextPropDisplay = 'block' | 'inline-block' | 'inline'

type TextOwnProps<E extends ElementType = ElementType> = {
  variant?: TextPropVariant
  align?: TextPropAlign
  cursor?: TextPropCursor
  decoration?: TextPropDecoration
  display?: TextPropDisplay
  transform?: TextPropTransform
  weight?: TextPropWeight
  fontSize?: TextPropSize
  spacing?: TextPropSpacing
  lineHeight?: TextPropLineHeight
  className?: string
  as?: E
}

type Props<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps>

const defaultElement = 'p'

export const Text = memo(<E extends ElementType = typeof defaultElement>({
  as,
  variant = 'primary',
  align = 'left',
  display = 'block',
  className,
  children,
  cursor = 'none',
  decoration = 'none',
  transform = 'lowercase',
  weight,
  fontSize = 'm',
  spacing,
  lineHeight = 'm',
  ...otherProps
}: PropsWithChildren<Props<E>>) => {
  const additionalClasses = [
    cls[align], cls[transform],
    cls['line-height'],
    cls['font-size'],
    cls[fontSize],
    cls[lineHeight], cls[variant], cls[display], cls[cursor], cls[decoration],
    className]

  const TagName = as || defaultElement
  return (
    <TagName {...otherProps} className={clsx(cls.text, {}, ...additionalClasses)}>
      {children}
    </TagName>
  )
})
