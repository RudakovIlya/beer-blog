import { FC } from 'react'
import { clsx } from 'shared/lib'
import { AppNavLink } from 'shared/ui/AppNavLink/AppNavLink'
import { AppSettings } from 'widgets/AppSettings'
import { useTranslation } from 'react-i18next'
import { ROUTES_PATHS } from 'app/providers/Router'
import cls from './Navbar.module.scss'

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <nav className={clsx(cls.navbar, {}, className)}>
      <AppSettings />
      <AppNavLink to={ROUTES_PATHS.main}>{t('home')}</AppNavLink>
      <AppNavLink to={ROUTES_PATHS.about}>{t('about')}</AppNavLink>
    </nav>
  )
}
