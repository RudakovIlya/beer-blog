import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileError = (state: StateSchema) => {
  return state.profile?.error
}
