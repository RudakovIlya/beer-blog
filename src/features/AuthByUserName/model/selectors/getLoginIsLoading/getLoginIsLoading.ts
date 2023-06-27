import { StateSchema } from 'app/providers/StoreProvider'

export const getLoginIsLoading = (state: StateSchema) => {
  return state?.login?.isLoading || false
}
