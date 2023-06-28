import { createSelector } from '@reduxjs/toolkit'
import { getUserAuthData } from '../getUserAuthData/getUserAuthData'

export const getUserName = createSelector(
  getUserAuthData,
  (user) => {
    return user?.username
  },
)
