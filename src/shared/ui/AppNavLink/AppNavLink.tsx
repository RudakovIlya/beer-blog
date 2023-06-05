import { FC } from 'react'
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

export const AppNavLink: FC<Props> = ({
  className,
  children,
  ...otherProps
}) => {
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
}
