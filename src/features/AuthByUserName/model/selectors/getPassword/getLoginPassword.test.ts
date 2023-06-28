import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginPassword } from './getLoginPassword'

describe('getLoginPassword', () => {
  test('should return entered password', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        password: '123',
      },
    }
    expect(getLoginPassword(state as StateSchema)).toBe('123')
  })
  test('should return "" with empty state', () => {
    const state: DeepPartial<StateSchema> = {
    }
    expect(getLoginPassword(state as StateSchema)).toBe('')
  })
})
