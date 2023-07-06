import { lazy } from 'react'

export const ArticlesDetailsPageAsync = lazy(() => {
  return import('./ArticlesDetailsPage')
})
