import { useDispatch, useSelector } from 'react-redux'
import { FormEvent, useCallback } from 'react'

import { getIsLoading } from '../selectors/getIsLoading/getIsLoading'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { getPassword } from '../selectors/getPassword/getPassword'
import { getUsername } from '../selectors/getUsername/getUsername'
import { loginActions } from '../slice/loginSlice'
import { getAuthError } from '../selectors/getAuthError/getAuthError'

export const useLogin = () => {
  const dispatch = useDispatch()

  const password = useSelector(getPassword)
  const username = useSelector(getUsername)
  const isLoading = useSelector(getIsLoading)
  const error = useSelector(getAuthError)

  const onChangeUsername = useCallback((username: string) => {
    dispatch(loginActions.setUsername({ username }))
  }, [dispatch])

  const onChangePassword = useCallback((password: string) => {
    dispatch(loginActions.setPassword({ password }))
  }, [dispatch])

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // @ts-ignore
    dispatch(loginByUsername({ username, password }))
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
