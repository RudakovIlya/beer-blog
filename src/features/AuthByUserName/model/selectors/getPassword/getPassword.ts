import { createSelector } from '@reduxjs/toolkit'
import { LoginSchema } from '../../types/loginSchema'
import { getLoginState } from '../getLoginState/getLoginState'

export const getPassword = createSelector(
  getLoginState,
  (login: LoginSchema) => {
    return login.password
  },
)
