type CurrencyType = 'RUB' | 'EUR' | 'USD'

export const CURRENCY: Record<CurrencyType, CurrencyType> = {
  RUB: 'RUB',
  EUR: 'EUR',
  USD: 'USD',
} as const

export const COUNTRY = {
  RUS: 'Russia',
  BEL: 'Belarus',
  UKR: 'Ukraine',
  KZH: 'Kazakhstan',
  ARM: 'Armenia',
} as const
