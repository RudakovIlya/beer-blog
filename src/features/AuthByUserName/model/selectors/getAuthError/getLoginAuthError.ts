import { StateSchema } from 'app/providers/StoreProvider'

export const getLoginAuthError = (state: StateSchema) => {
  return state?.login?.error || ''
}
