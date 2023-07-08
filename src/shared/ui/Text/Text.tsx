import React, {
  ElementType, PropsWithChildren, ComponentProps, memo, useMemo,
} from 'react'
import { clsx } from 'shared/lib'
import cls from './Text.module.scss'

export type TextPropAlign = 'left' | 'center' | 'right';

export type TextPropCursor = 'pointer' | 'none'

export type TextPropDecoration = 'underline' | 'none'

export type TextPropLineHeight = 'lh2xs' | 'lhxs' | 'lhs' | 'lhm' | 'lhl';

export type TextPropSize =
  'fs' |
  'fxs' |
  'f2xs' |
  'fm' |
  'fl' |
  'fxl' |
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

export type TextPropWeight =
  'thin' |
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
  weight = 'regular',
  fontSize = 'fm',
  spacing,
  lineHeight = 'lhm',
  ...otherProps
}: PropsWithChildren<Props<E>>) => {
  const additionalClasses = useMemo(() => {
    return [
      cls[align],
      cls[transform],
      cls[fontSize],
      cls[weight],
      cls[lineHeight],
      cls[variant],
      cls[display],
      cls[cursor],
      cls[decoration],
      className,
    ]
  }, [align, className, cursor, decoration, display, fontSize, lineHeight, transform, variant, weight])

  const TagName = as || defaultElement
  return (
    <TagName {...otherProps} className={clsx('', undefined, ...additionalClasses)}>
      {children}
    </TagName>
  )
})
