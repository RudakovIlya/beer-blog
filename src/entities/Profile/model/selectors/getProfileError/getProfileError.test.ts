import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileError } from './getProfileError'

describe('getProfileError', () => {
  test('should return current error', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        error: 'Error',
      },
    }
    expect(getProfileError(state as StateSchema))
      .toBe('Error')
  })
  test('should return undefined at empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema))
      .toBeUndefined()
  })
})
