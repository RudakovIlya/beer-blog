import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileIsLoading } from './getProfileIsLoading'

describe('getProfileIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    }
    expect(getProfileIsLoading(state as StateSchema))
      .toBeTruthy()
  })
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    }
    expect(getProfileIsLoading(state as StateSchema))
      .toBeFalsy()
  })
  test('should return undefined at empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileIsLoading(state as StateSchema))
      .toBeUndefined()
  })
})
