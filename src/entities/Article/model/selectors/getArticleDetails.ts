import { StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsData = (state: StateSchema) => {
  return state.articleDetails?.data
}

export const getArticleDetailsIsLoading = (state: StateSchema) => {
  return state.articleDetails?.isLoading
}

export const getArticleDetailsError = (state: StateSchema) => {
  return state.articleDetails?.error
}
