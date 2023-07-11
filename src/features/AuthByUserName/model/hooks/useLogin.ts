import { useSelector } from 'react-redux'
import { FormEvent, useCallback } from 'react'

import { useAppDispatch } from 'shared/hooks'
import { getLoginError } from '../selectors/getLoginError/getLoginError'
import { getLoginIsLoading } from '../selectors/getLoginIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../selectors/getPassword/getLoginPassword'
import { getLoginUsername } from '../selectors/getUsername/getLoginUsername'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { loginActions } from '../slice/loginSlice'

export const useLogin = () => {
  const dispatch = useAppDispatch()

  const password = useSelector(getLoginPassword)
  const username = useSelector(getLoginUsername)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

  const onChangeUsername = useCallback((username: string) => {
    dispatch(loginActions.setUsername({ username }))
  }, [dispatch])

  const onChangePassword = useCallback((password: string) => {
    dispatch(loginActions.setPassword({ password }))
  }, [dispatch])

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    dispatch(loginByUsername({
      username,
      password,
    }))
  }, [dispatch, username, password])

  return {
    data: {
      username,
      password,
      isLoading,
      error,
    },
    onSubmit,
    onChangeUsername,
    onChangePassword,
  }
}
