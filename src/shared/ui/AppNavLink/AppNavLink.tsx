import { memo, PropsWithChildren } from 'react'
import { clsx } from 'shared/lib'
import { NavLink, NavLinkProps } from 'react-router-dom'
import cls from './AppNavLink.module.scss'

interface Props extends NavLinkProps {
  className?: string
}

interface isActiveProps {
  isActive: boolean,
  isPending: boolean
}

export const AppNavLink = memo(({
  className,
  children,
  ...otherProps
}: PropsWithChildren<Props>) => {
  const activeClass = ({ isActive }: isActiveProps) => {
    return clsx(cls.navlink, {
      [cls.active]: isActive,
    }, className)
  }
  return (
    <NavLink {...otherProps} className={activeClass}>
      {children}
    </NavLink>
  )
})
