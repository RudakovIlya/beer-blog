import { lazy } from 'react'

export const AddCommentFormAsync = lazy(() => {
  return import('./AddCommentForm')
})
