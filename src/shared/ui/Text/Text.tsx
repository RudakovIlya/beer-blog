import {
  ElementType, PropsWithChildren, ComponentProps, memo, useMemo,
} from 'react'
import { clsx } from 'shared/lib'
import { addPrefixOnClass } from 'shared/lib/addPrefixOnClass/addPrefixOnClass'
import cls from './Text.module.scss'

export type TextPropAlign = 'left' | 'center' | 'right';

export type TextPropCursor = 'pointer' | 'none'

export type TextPropDecoration = 'underline' | 'none'

export type TextPropLineHeight = '2xs' | 'xs' | 's' | 'm' | 'l';

export type TextPropSize =
  's' |
  'xs' |
  'xs2' |
  'm' |
  'l' |
  'xl' |
  'xl2' |
  'xl3' |
  'xl4' |
  'xl5' |
  'xl6'

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
  fontSize = 'm',
  spacing,
  lineHeight = 'm',
  ...otherProps
}: PropsWithChildren<Props<E>>) => {
  const additionalClasses = useMemo(() => {
    return [
      cls[align],
      cls[transform],
      cls[addPrefixOnClass('size', fontSize)],
      cls[addPrefixOnClass('line-height', lineHeight)],
      cls[lineHeight],
      cls[weight],
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
