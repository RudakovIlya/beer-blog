import { memo, PropsWithChildren } from 'react'
import { clsx } from 'shared/lib'
import { Link, LinkProps } from 'react-router-dom'
import cls from './AppLink.module.scss'

export type AppLinkVariant = 'primary' | 'secondary'

interface Props extends LinkProps {
  className?: string
  variant?: AppLinkVariant
}

export const AppLink = memo(({
  variant = 'primary',
  className,
  to,
  children,
  ...otherProps
}:PropsWithChildren<Props>) => {
  return (
    <Link {...otherProps} to={to} className={clsx(cls.applink, {}, cls[variant], className)}>
      
      {children}
      
    </Link>
  )
})
