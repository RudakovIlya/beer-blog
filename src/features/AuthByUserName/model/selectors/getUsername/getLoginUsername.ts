import { StateSchema } from 'app/providers/StoreProvider'

export const getLoginUsername = (state: StateSchema) => {
  return state?.login?.username || ''
}
