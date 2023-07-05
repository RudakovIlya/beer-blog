import { StateSchema } from 'app/providers/StoreProvider'

export const getUserMounted = (state: StateSchema) => {
  return state.user._mounted
}
