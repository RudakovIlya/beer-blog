import { StateSchema } from 'app/providers/StoreProvider'

import { getProfileValidateErrors } from './getProfileValidateErrors'
import { ValidateProfileError } from '../../types/profile'

describe('getProfileValidateErrors', () => {
  test('should return error array', () => {
    const errors = [ValidateProfileError.INCORRECT_COUNTRY, ValidateProfileError.INCORRECT_AGE]
    const state: DeepPartial<StateSchema> = {
      profile: {
        validateErrors: errors,
      },
    }
    expect(getProfileValidateErrors(state as StateSchema))
      .toEqual(errors)
    expect(getProfileValidateErrors(state as StateSchema)?.length).toBe(2)
    expect(getProfileValidateErrors(state as StateSchema)![0]).toBe(ValidateProfileError.INCORRECT_COUNTRY)
    expect(getProfileValidateErrors(state as StateSchema)![1]).toBe(ValidateProfileError.INCORRECT_AGE)
  })
  test('should return undefined at empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema))
      .toBeUndefined()
  })
})
