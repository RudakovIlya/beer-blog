import { StateSchema } from 'app/providers/StoreProvider'

export const getCommentsError = (state: StateSchema) => {
  return state.articleDetailsComments?.error
}

export const getCommentsIsLoading = (state: StateSchema) => {
  return state.articleDetailsComments?.isLoading
}
