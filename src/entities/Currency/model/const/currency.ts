export type CurrencyType = 'RUB' | 'EUR' | 'USD'

export const CURRENCY: Record<CurrencyType, CurrencyType> = {
  RUB: 'RUB',
  EUR: 'EUR',
  USD: 'USD',
} as const
