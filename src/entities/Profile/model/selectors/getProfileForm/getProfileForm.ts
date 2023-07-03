import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileForm = (state: StateSchema) => {
  return state.profile?.form
}
