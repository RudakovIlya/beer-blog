import { lazy } from 'react'

export const MainPageAsync = lazy(() => {
  return import('./MainPage')
})
