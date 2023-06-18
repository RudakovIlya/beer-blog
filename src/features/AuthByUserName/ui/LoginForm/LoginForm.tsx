import { PropsWithChildren, useState } from 'react'
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
    <div className={clsx(cls['login-form'], {}, className)}>
      <Input autoFocus value={value} onChange={onChange} className={cls.input} type={'text'} />
      <Input value={value} onChange={onChange} className={cls.input} type={'text'} />
      <Button className={cls.button} background={'background-inverted'} type={'submit'}>
        {t('sign in')}
      </Button>
    </div>
  )
}
