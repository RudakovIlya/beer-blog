import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileData = (state: StateSchema) => {
  return state.profile?.data
}
