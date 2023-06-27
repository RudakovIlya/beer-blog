import { memo, useCallback } from 'react'
import { clsx } from 'shared/lib'
import { AppSettings } from 'widgets/AppSettings'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useModals } from 'shared/hooks'
import { Button } from 'shared/ui/Button/Button'
import { LoginModal } from 'features/AuthByUserName'
import { IoIosBeer } from 'react-icons/io'
import { AppLink } from 'shared/ui/AppLink/AppLink'
import { ROUTES_PATHS } from 'app/providers/Router'
import { useSelector } from 'react-redux'
import { getUserAuthData, userActions } from 'entities/User'
import cls from './Navbar.module.scss'

interface Props {
  className?: string
}

export const Navbar = memo(({ className }: Props) => {
  const { t } = useTranslation()
  const dispatch = useAppDispatch()
  const authData = useSelector(getUserAuthData)

  const {
    onClose,
    isOpen,
    onOpen,
  } = useModals()

  const onLogout = useCallback(() => {
    dispatch(userActions.logout())
    onClose()
  }, [dispatch, onClose])

  return (
    <nav className={clsx(cls.navbar, {}, className)}>
      <AppLink className={cls.link} to={ROUTES_PATHS.main}>
        <IoIosBeer size={35} />
        <span>{t('Beer Love')}</span>
      </AppLink>
      <AppSettings />
      <Button
        variant={'ghost'}
        onClick={authData ? onLogout : onOpen}
      >
        {authData ? t('logout') : t('sign in')}
      </Button>
      {!authData && <LoginModal isOpen={isOpen} onClose={onClose} />}
    </nav>
  )
})
