import { FC } from 'react'
import { clsx } from 'shared/lib'
import { AppNavLink } from 'shared/ui/AppNavLink/AppNavLink'
import { AppSettings } from 'widgets/AppSettings'
import { useTranslation } from 'react-i18next'
import cls from './Navbar.module.scss'

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  return (
    <nav className={clsx(cls.navbar, {}, className)}>
      <AppSettings />
      <AppNavLink to={'/'}>{t('home')}</AppNavLink>
      <AppNavLink to={'/about'}>{t('about')}</AppNavLink>
    </nav>
  )
}
