import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchProfileData } from './fetchProfileData'

const data = {
  first: 'Илья',
  lastname: 'Rudakov',
  age: 22,
  currency: 'EUR',
  country: 'Russia',
  city: 'Abinsk',
  username: 'asap_alh',
  avatar: '',
}

describe('fetchProfileData', () => {
  test('should be success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk('1')

    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })
  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('2')

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
