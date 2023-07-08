import { CSSProperties, useMemo } from 'react'
import { clsx } from 'shared/lib'
import { getInitialsForName } from 'shared/lib/getInitialsForName/getInitialsForName'
import { getColorIndexForName } from 'shared/lib/getColorIndexForName/getColorIndexForName'
import { MAX_COLOR_INDEX } from 'shared/const/maxColorIndex'
import cls from './Avatar.module.scss'

interface Props {
  src?: string;
  alt?: string
  name?: string;
  style?: CSSProperties
  form?: 'round' | 'brick' | 'default'
  size?: 'm' | 's' | 'xs' | 'l'
  inlineSize?: number
  className?: string
}

export const Avatar = (props: Props) => {
  const {
    src,
    name,
    alt,
    style,
    form = 'default',
    size = 'm',
    inlineSize,
    className,
  } = props

  const initials = useMemo(() => {
    return getInitialsForName(name)
  }, [name])

  const colorIndex = useMemo(
    () => {
      return getColorIndexForName(name, MAX_COLOR_INDEX)
    },
    [name],
  )

  const additionalClasses = useMemo(() => {
    return [cls[size], cls[form], className]
  }, [size, form, className])

  return (
    <div
      style={{
        width: inlineSize,
        height: inlineSize,
        backgroundColor: !src ? `var(--avatar-color-${colorIndex})` : undefined,
        ...style,
      }}
      className={clsx(cls.avatar, {}, ...additionalClasses)}
    >
      {src && <img className={cls.image} src={src} alt={alt} />}
      {!src && initials}
    </div>
  )
}
