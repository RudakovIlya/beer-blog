import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileReadonly } from './getProfileReadonly'

describe('getProfileReadonly', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    }
    expect(getProfileReadonly(state as StateSchema))
      .toBeTruthy()
  })
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    }
    expect(getProfileReadonly(state as StateSchema))
      .toBeFalsy()
  })
  test('should return undefined at empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileReadonly(state as StateSchema))
      .toBeUndefined()
  })
})
