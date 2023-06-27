import { lazy } from 'react'

export const ProfilePageAsync = lazy(() => {
  return import('./ProfilePage')
})
