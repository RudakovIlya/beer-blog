import {
  memo,
  PropsWithChildren,
} from 'react'
import { clsx } from 'shared/lib'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'
import { Text } from 'shared/ui/Text/Text'
import { useLogin } from 'features/AuthByUserName/model/hooks/useLogin'
import { useDynamicModuleLoader } from 'shared/hooks'
import { ReducerList } from 'shared/hooks/useDynamicModuleLoader/useDynamicModuleLoader'
import { loginReducer } from '../../model/slice/loginSlice'
import cls from './LoginForm.module.scss'

export interface Props {
  className?: string
}

const initialReducer: ReducerList = {
  login: loginReducer,
}

const LoginForm = memo(({ className }: PropsWithChildren<Props>) => {
  const { t } = useTranslation()

  useDynamicModuleLoader({
    reducers: initialReducer,
    removeAfterUnmount: true,
  })

  const {
    onChangeUsername,
    onChangePassword,
    data,
    onSubmit,
  } = useLogin()

  return (
    <form onSubmit={onSubmit} className={clsx(cls['login-form'], {}, className)}>
      <Text className={clsx(cls.title)} align={'center'} as={'h2'}>{t('sign in')}</Text>
      {data.error
        && (
          <Text className={clsx(cls.error)} align={'center'} variant={'alert'}>
            {t('You entered an incorrect username or password')}
          </Text>
        )}
      <Input
        autoFocus
        type={'text'}
        value={data.username}
        onChange={onChangeUsername}
        className={cls.input}
        placeholder={t('Login')}
        wrapperClassName={cls['input-wrapper']}
      />
      <Input
        type={'text'}
        value={data.password}
        onChange={onChangePassword}
        className={cls.input}
        placeholder={t('Password')}
        wrapperClassName={cls['input-wrapper']}
      />
      <Button
        type={'submit'}
        variant={'ghost'}
        disabled={data.isLoading}
        isLoading={data.isLoading}
        className={cls.button}
      >
        {t('sign in')}
      </Button>
    </form>
  )
})
export default LoginForm
