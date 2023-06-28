import { StateSchema } from 'app/providers/StoreProvider'
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      login: {
        isLoading: true,
      },
    }
    expect(getLoginIsLoading(state as StateSchema)).toBeTruthy()
  })
  test('should return false with empty state', () => {
    const state: DeepPartial<StateSchema> = {
    }
    expect(getLoginIsLoading(state as StateSchema)).toBeFalsy()
  })
})
