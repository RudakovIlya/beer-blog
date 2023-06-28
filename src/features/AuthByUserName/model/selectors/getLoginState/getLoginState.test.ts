import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginState } from './getLoginState'

describe('getLoginState', () => {
  test('should return current state', () => {
    const loginState = {
      username: 'admin',
      password: '123',
      isLoading: false,
    }
    const state: DeepPartial<StateSchema> = {
      login: loginState,
    }
    expect(getLoginState(state as StateSchema)).toEqual(loginState)
  })
  test('should return undefined', () => {
    const state: DeepPartial<StateSchema> = {
    }
    expect(getLoginState(state as StateSchema)).toBeUndefined()
  })
})
