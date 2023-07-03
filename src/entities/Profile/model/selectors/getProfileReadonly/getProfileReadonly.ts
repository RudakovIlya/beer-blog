import { StateSchema } from 'app/providers/StoreProvider'

export const getProfileReadonly = (state: StateSchema) => {
  return state.profile?.readonly
}
