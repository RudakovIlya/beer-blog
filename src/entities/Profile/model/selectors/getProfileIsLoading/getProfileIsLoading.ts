import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileIsLoading = (state: StateSchema) => {
  return state.profile?.isLoading
}
