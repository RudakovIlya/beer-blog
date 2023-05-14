import {FC} from "react";
import {clsx} from "shared/lib";
import {AppNavLink} from "shared/ui/AppNavLink/AppNavLink";
import cls from './Navbar.module.scss'
import {AppSettings} from "widgets/AppSettings";
import {useTranslation} from "react-i18next";

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({className}) => {
  const {t} = useTranslation()
  return (
    <nav className={clsx(cls.navbar, {}, className)}>
      <AppSettings/>
      <AppNavLink to={'/'}>{t('home')}</AppNavLink>
      <AppNavLink to={'/about'}>{t('about')}</AppNavLink>
    </nav>
  )
};