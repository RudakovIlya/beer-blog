import { CURRENCY } from 'entities/Currency'
import { COUNTRY } from 'entities/Country'
import { ValidateProfileError } from '../../types/profile'
import { validateProfile } from './validateProfile'

const data = {
  first: 'Илья',
  lastname: 'Rudakov',
  age: 22,
  currency: CURRENCY.RUB,
  country: COUNTRY.Russia,
  city: 'Abinsk',
  username: 'asap_alh',
  avatar: '',
}

describe('validateProfile', () => {
  test('should be success', () => {
    const result = validateProfile(data)

    expect(result)
      .toEqual([])
  })
  test(`should be ${ValidateProfileError.INCORRECT_USER_DATA} in the absence of a first or last name`, () => {
    const result = validateProfile({
      ...data,
      first: '',
      lastname: '',
    })
    expect(result)
      .toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    expect(result.length)
      .toBe(1)
  })
  test(`should be ${ValidateProfileError.INCORRECT_AGE} at the wrong age`, () => {
    const result = validateProfile({
      ...data,
      age: undefined,
    })
    expect(result)
      .toEqual([ValidateProfileError.INCORRECT_AGE])
    expect(result.length)
      .toBe(1)
  })
  test(`should be ${ValidateProfileError.INCORRECT_COUNTRY} at the incorrect country`, () => {
    const result = validateProfile({
      ...data,
      country: undefined,
    })
    expect(result)
      .toEqual([ValidateProfileError.INCORRECT_COUNTRY])
    expect(result.length)
      .toBe(1)
  })
  test('should be errors for all empty fields', () => {
    const result = validateProfile({})
    expect(result)
      .toEqual([
        ValidateProfileError.INCORRECT_USER_DATA,
        ValidateProfileError.INCORRECT_AGE,
        ValidateProfileError.INCORRECT_COUNTRY,
      ])
    expect(result.length)
      .toBe(3)
  })
})
