import { clsx } from 'shared/lib'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async'
import cls from './LoginModal.module.scss'

interface Props {
  isOpen?: boolean
  onClose?: () => void
  className?: string
}

export const LoginModal = ({ isOpen, onClose, className }: Props) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={clsx(cls['login-modal'], {}, className)}>
      <Suspense fallback={<Loader size={'large'} />}>
        <LoginForm />
      </Suspense>
    </Modal>
  )
}
