import { createSelector } from '@reduxjs/toolkit'
import { LoginSchema } from 'features/AuthByUserName'
import { getLoginState } from '../getLoginState/getLoginState'

export const getAuthError = createSelector(
  getLoginState,
  (login) => {
    return login.error
  },
)
