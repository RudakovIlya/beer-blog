import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { CURRENCY } from 'entities/Currency'
import { COUNTRY } from 'entities/Country'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'
import { updateProfileData } from './updateProfileData'

const data = {
  first: 'Илья',
  lastname: 'Rudakov',
  age: 22,
  currency: CURRENCY.RUB,
  country: COUNTRY.Russia,
  city: 'Abinsk',
  username: 'asap_alh',
  avatar: '',
  id: '1',
}

describe('updateProfileData', () => {
  test('should be success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk()

    expect(thunk.api.put)
      .toHaveBeenCalled()
    expect(result.meta.requestStatus)
      .toBe('fulfilled')
    expect(result.payload)
      .toEqual(data)
  })
  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: data,
      },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))

    const result = await thunk.callThunk()

    expect(result.meta.requestStatus)
      .toBe('rejected')
    expect(result.payload)
      .toEqual([ValidateProfileError.SERVER_ERROR])
  })
  test('should be validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        form: { ...data, lastname: '' },
      },
    })
    const result = await thunk.callThunk()

    expect(result.meta.requestStatus)
      .toBe('rejected')
    expect(result.payload)
      .toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
})
