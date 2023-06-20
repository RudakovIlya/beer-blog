import {
  PropsWithChildren, useEffect, useRef, useState,
} from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import cls from './LoginForm.module.scss'

interface Props {
  className?: string
}

export const LoginForm = ({ className }: PropsWithChildren<Props>) => {
  const { t } = useTranslation()
  const [value, setValue] = useState('')

  const onChange = (value: string) => {
    setValue(value)
  }

  return (
    <form className={clsx(cls['login-form'], {}, className)}>
      <Input
        autoFocus
        type={'text'}
        value={value}
        onChange={onChange}
        className={cls.input}
        placeholder={t('Login')}
        wrapperClassName={cls['input-wrapper']}
      />
      <Input
        type={'text'}
        value={value}
        onChange={onChange}
        className={cls.input}
        placeholder={t('Password')}
        wrapperClassName={cls['input-wrapper']}
      />
      <Button className={cls.button} background={'background-inverted'} type={'submit'}>
        {t('sign in')}
      </Button>
    </form>
  )
}
