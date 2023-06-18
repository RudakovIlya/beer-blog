import { counterReducer, counterActions } from './counterSlice'
import { CounterSchema } from '../types/counterSchema'

describe('counterReducer', () => {
  let state:CounterSchema

  beforeEach(() => {
    state = {
      value: 10,
    }
  })

  test('should increment the value when increment action is dispatched', () => {
    expect(counterReducer(state as CounterSchema, counterActions.increment())).toEqual({ value: 11 })
  })
  test('should decrement the value when increment action is dispatched', () => {
    expect(counterReducer(state as CounterSchema, counterActions.decrement())).toEqual({ value: 9 })
  })
  test('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
  })
})
