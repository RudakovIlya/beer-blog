import { FC } from 'react'
import { clsx } from 'shared/lib'
import { AppSettings } from 'widgets/AppSettings'
import { useTranslation } from 'react-i18next'
import { useModals } from 'shared/hooks'
import { Modal } from 'shared/ui/Modal/Modal'
import { Button } from 'shared/ui/Button/Button'
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
      <AppSettings />
      <Button variant={'clear-inverted'} onClick={onOpen}>{t('sign in')}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        Lorem ipsum dolor sit amet.
      </Modal>
    </nav>
  )
}
