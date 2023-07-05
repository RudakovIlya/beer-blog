import { StateSchema } from 'app/providers/StoreProvider'

import { CURRENCY } from 'entities/Currency'
import { COUNTRY } from 'entities/Country'
import { getProfileData } from './getProfileData'

describe('getProfileData', () => {
  test('should return current profile data', () => {
    const data = {
      first: 'Илья',
      lastname: 'Rudakov',
      age: 24,
      currency: CURRENCY.RUB,
      country: COUNTRY.Russia,
      city: 'Abinsk',
      username: 'asap_alh',
      avatar: '',

    }
    const state: DeepPartial<StateSchema> = {
      profile: {
        data,
      },
    }
    expect(getProfileData(state as StateSchema))
      .toEqual(data)
  })
  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema))
      .toBeUndefined()
  })
})
