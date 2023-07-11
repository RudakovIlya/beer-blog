import { CURRENCY } from 'entities/Currency'
import { COUNTRY } from 'entities/Country'
import { updateProfileData } from 'entities/Profile'
import { profileReducer, profileActions } from './profileSlice'
import { ValidateProfileError, ProfileSchema } from '../types/profile'

const data = {
  first: 'Илья',
  lastname: 'Rudakov',
  age: 22,
  currency: CURRENCY.RUB,
  country: COUNTRY.Russia,
  city: 'Abinsk',
  username: 'asap_alh',
  avatar: '',
}

describe('profileSlice', () => {
  test('should be set readonly', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
    }
    expect(profileReducer(state as ProfileSchema, profileActions
      .setReadonly(true)))
      .toBeTruthy()
  })
  test('should be cancel edit', () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      validateErrors: [],
      data,
      form: data,
    }
    expect(profileReducer(state as ProfileSchema, profileActions
      .cancelEdit()))
      .toEqual({
        readonly: true,
        validateErrors: undefined,
        form: data,
        data,
      })
  })
  test('should be updated profile', () => {
    const state: DeepPartial<ProfileSchema> = {
      form: {
        first: 'Ilya',
        lastname: 'Rudakov',
      },
    }
    expect(profileReducer(state as ProfileSchema, profileActions
      .updateProfile({
        first: 'Dmitri',
        lastname: 'Dmitri',
      })))
      .toEqual({
        form: {
          first: 'Dmitri',
          lastname: 'Dmitri',
        },
      })
  })
  test('test update profile service with pending status', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }
    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({
        isLoading: true,
        validateErrors: undefined,
      })
  })
  test('test update profile service with fulfilled status', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
      validateErrors: [ValidateProfileError.SERVER_ERROR],
    }
    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
      .toEqual({
        isLoading: false,
        readonly: true,
        data,
        form: data,
        validateErrors: undefined,
      })
  })
  test('test update profile service with rejected status', () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      readonly: false,
    }
    expect(profileReducer(state as ProfileSchema, {
      type: updateProfileData.rejected.type,
      payload: ValidateProfileError.INCORRECT_USER_DATA,
    }))
      .toEqual({
        isLoading: false,
        readonly: false,
        validateErrors: ValidateProfileError.INCORRECT_USER_DATA,
      })
  })
})
