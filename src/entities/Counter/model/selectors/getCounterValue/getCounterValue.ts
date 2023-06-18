import { createSelector } from '@reduxjs/toolkit'
import { getCounter } from '../getCounter/getCounter'
import { CounterSchema } from '../../types/counterSchema'

export const getCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => {
    return counter.value
  },
)
