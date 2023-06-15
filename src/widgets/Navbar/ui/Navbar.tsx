import { FC } from 'react'
import { clsx } from 'shared/lib'
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
    </nav>
  )
}
