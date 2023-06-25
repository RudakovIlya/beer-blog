import { useDispatch, useSelector } from 'react-redux'
import { FormEvent, useCallback } from 'react'

import { getLoginIsLoading } from '../selectors/getIsLoading/getLoginIsLoading'
import { getLoginPassword } from '../selectors/getPassword/getLoginPassword'
import { getLoginUsername } from '../selectors/getUsername/getLoginUsername'
import { getLoginAuthError } from '../selectors/getAuthError/getLoginAuthError'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { loginActions } from '../slice/loginSlice'

export const useLogin = () => {
  const dispatch = useDispatch()

  const password = useSelector(getLoginPassword)
  const username = useSelector(getLoginUsername)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginAuthError)

  const onChangeUsername = useCallback((username: string) => {
    dispatch(loginActions.setUsername({ username }))
  }, [dispatch])

  const onChangePassword = useCallback((password: string) => {
    dispatch(loginActions.setPassword({ password }))
  }, [dispatch])

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // @ts-ignore
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
