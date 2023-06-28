import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginUsername } from './getLoginUsername'

describe('getLoginUsername', () => {
  test('should return entered username', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        username: 'admin',
      },
    }
    expect(getLoginUsername(state as StateSchema)).toBe('admin')
  })
  test('should return "" with empty state', () => {
    const state: DeepPartial<StateSchema> = {
    }
    expect(getLoginUsername(state as StateSchema)).toBe('')
  })
})
