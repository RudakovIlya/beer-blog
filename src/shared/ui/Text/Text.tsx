import React, {
  ElementType, PropsWithChildren, ComponentProps, memo, CSSProperties,
} from 'react'
import { clsx } from 'shared/lib'
import cls from './Text.module.scss'

export type TextPropAlign = 'left' | 'center' | 'right';

export type TextPropCursor = 'pointer'

export type TextPropDecoration = 'underline'

export type TextPropLineHeight = '2xs' | 'xs' | 's' | 'm' | 'l';

export type TextPropSize =
  's' |
  'xs' |
  '2xs' |
  'm' |
  'l' |
  'xl' |
  '2xl' |
  '3xl' |
  '4xl' |
  '5xl' |
  '6xl'

export type TextPropSpacing = 'xs'| 's'| 'm'| 'l'

export const textPropType = ['blockquote', 'p', 'h3', 'h2', 'h1'] as const
export type TextPropType = typeof textPropType[number];

export const textPropVariant = [
  'primary',
  'secondary',
  'brand',
  'ghost',
  'link',
  'linkMinor',
  'system',
  'normal',
  'success',
  'warning',
  'alert',
  'caution',
  'critical',
] as const
export type TextPropVariant = typeof textPropVariant[number];
export const textPropVariantDefault: TextPropVariant = textPropVariant[0]

export const textPropWeight = [
  'thin',
  'light',
  'regular',
  'medium',
  'semibold',
  'bold',
  'black',
] as const
export type TextPropWeight = typeof textPropWeight[number];

export const textPropTransform = ['uppercase'] as const
export type TextPropTransform = typeof textPropTransform[number];

export const textPropWidth = ['default'] as const
export type TextPropWidth = typeof textPropWidth[number];

export const textPropDisplay = ['block', 'inlineBlock', 'inline'] as const
export type TextPropDisplay = typeof textPropDisplay[number];

type TextOwnProps<E extends ElementType = ElementType> = {
  variant?: TextPropVariant
  align?: TextPropAlign
  cursor?: TextPropCursor
  decoration?: TextPropDecoration
  display: TextPropDisplay
  lineHeight?: TextPropLineHeight
  as?: E
}

type Props<E extends ElementType> = TextOwnProps<E> & Omit<ComponentProps<E>, keyof TextOwnProps>

const defaultElement = 'p'

export const Text = memo(<E extends ElementType = typeof defaultElement>({
  as,
  variant = textPropVariantDefault,
  align = 'left',
  display,
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
