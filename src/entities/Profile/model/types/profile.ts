import { COUNTRY, CURRENCY } from 'shared/const/common'

export interface Profile {
  first: string,
  lastname: string,
  age: number,
  currency: typeof CURRENCY[keyof typeof CURRENCY],
  country: typeof COUNTRY[keyof typeof COUNTRY],
  city: string,
  username: string,
  avatar: string
}

export interface ProfileSchema {
  data?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
