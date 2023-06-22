import { createSelector } from '@reduxjs/toolkit'
import { User } from '../../types/user'
import { getUserAuthData } from '../getUserAuthData/getUserAuthData'

export const getUserName = createSelector(
  getUserAuthData,
  (user: User) => {
    return user.username
  },
)
