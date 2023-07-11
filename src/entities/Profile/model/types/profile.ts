import { CURRENCY } from 'entities/Currency/model/const/currency'
import { COUNTRY } from 'entities/Country/model/const/country'

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT USER DATA',
  INCORRECT_AGE = 'INCORRECT AGE',
  INCORRECT_COUNTRY = 'INCORRECT COUNTRY',
  NO_DATA = 'NO DATA',
  SERVER_ERROR = 'SERVER ERROR',
}

export interface Profile {
  id?: string
  first?: string,
  lastname?: string,
  age?: number,
  currency?: typeof CURRENCY[keyof typeof CURRENCY],
  country?: typeof COUNTRY[keyof typeof COUNTRY],
  city?: string,
  username?: string,
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
  validateErrors?: ValidateProfileError[]
}
