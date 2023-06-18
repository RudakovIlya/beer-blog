import { clsx } from 'shared/lib'
import { Modal } from 'shared/ui/Modal/Modal'
import { LoginForm } from '../LoginForm/LoginForm'
import cls from './LoginModal.module.scss'

interface Props {
  isOpen?: boolean
  onClose?: () => void
  className?: string
}

export const LoginModal = ({ isOpen, onClose, className }: Props) => {
  return (
    <Modal lazy isOpen={isOpen} onClose={onClose} className={clsx(cls['login-modal'], {}, className)}>
      <LoginForm />
    </Modal>
  )
}
