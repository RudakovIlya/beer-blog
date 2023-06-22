import { FC } from 'react'
import { clsx } from 'shared/lib'
import { AppSettings } from 'widgets/AppSettings'
import { useTranslation } from 'react-i18next'
import { useModals } from 'shared/hooks'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUserName'
import { IoIosBeer } from 'react-icons/io'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ROUTES_PATHS } from 'app/providers/Router'
import cls from './Navbar.module.scss'

interface Props {
  className?: string
}

export const Navbar: FC<Props> = ({ className }) => {
  const { t } = useTranslation()
  const {
    onClose, isOpen, onOpen,
  } = useModals()

  return (
    <nav className={clsx(cls.navbar, {}, className)}>
      <AppLink className={cls.link} to={ROUTES_PATHS.main}>
        <IoIosBeer size={35} />
        <span>{t('Beer Love')}</span>
      </AppLink>
      <AppSettings />
      <Button variant={'ghost'} onClick={onOpen}>{t('sign in')}</Button>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </nav>
  )
}
