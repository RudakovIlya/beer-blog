import {FC} from "react";
import {clsx} from "shared/lib";
import cls from './AppNavLink.module.scss'
import {NavLink, NavLinkProps} from "react-router-dom";

interface Props extends NavLinkProps {
  className?: string
}

export const AppNavLink: FC<Props> = ({className, children, ...otherProps}) => {
  const activeClass = ({isActive}: { isActive: boolean }) => clsx(cls.navlink, {[cls.active]: isActive}, className)
  return (
    <NavLink {...otherProps} className={activeClass}>
      {children}
    </NavLink>
  )
};