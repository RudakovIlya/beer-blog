import { StateSchema } from 'app/providers/StoreProvider'

export const getAddCommentFormText = (state: StateSchema) => {
  return state.addCommentForm?.text || ''
}
export const getAddCommentFormError = (state: StateSchema) => {
  return state.addCommentForm?.error
}
export const getAddCommentFormIsLoading = (state: StateSchema) => {
  return state.addCommentForm?.isLoading
}
