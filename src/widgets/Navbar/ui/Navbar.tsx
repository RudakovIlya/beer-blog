import {FC} from "react";
import {clsx} from "shared/lib";
import {AppNavLink} from "shared/ui/AppNavLink/AppNavLink";
import cls from './Navbar.module.scss'
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({className}) => {
  return (
    <nav className={clsx(cls.navbar, {}, className)}>
      <ThemeSwitcher/>
      <AppNavLink to={'/'}>Home</AppNavLink>
      <AppNavLink to={'/about'}>About</AppNavLink>
    </nav>
  )
};