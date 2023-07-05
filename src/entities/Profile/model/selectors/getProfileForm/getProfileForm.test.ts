import { StateSchema } from 'app/providers/StoreProvider'

import { CURRENCY } from 'entities/Currency'
import { COUNTRY } from 'entities/Country'
import { getProfileForm } from './getProfileForm'

describe('getProfileForm', () => {
  test('should return current profile form data', () => {
    const formData = {
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
        form: formData,
      },
    }
    expect(getProfileForm(state as StateSchema))
      .toEqual(formData)
  })
  test('should return undefined with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema))
      .toBeUndefined()
  })
})
