import { createSelector } from '@reduxjs/toolkit'
import { LoginSchema } from 'features/AuthByUserName'
import { getLoginState } from '../getLoginState/getLoginState'

export const getIsLoading = createSelector(
  getLoginState,
  (login: LoginSchema) => {
    return login.isLoading
  },
)
