import { CURRENCY } from 'entities/Currency/model/const/currency'
import { COUNTRY } from 'entities/Country/model/const/country'

export interface Profile {
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
}
