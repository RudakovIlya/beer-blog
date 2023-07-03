export type CountryType = 'Russia' |
  'Belarus' |
  'Ukraine' |
  'Kazakhstan' |
  'Armenia'
export const COUNTRY: Record<CountryType, CountryType> = {
  Russia: 'Russia',
  Belarus: 'Belarus',
  Ukraine: 'Ukraine',
  Kazakhstan: 'Kazakhstan',
  Armenia: 'Armenia',
} as const
