import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { LoginSchema } from '../types/loginSchema'
import { loginReducer, loginActions } from './loginSlice'

describe('loginSlice', () => {
  test('should be set username', () => {
    const username = 'admin'
    const state: DeepPartial<LoginSchema> = {
      username,
    }
    expect(loginReducer(state as LoginSchema, loginActions
      .setUsername({ username })))
      .toEqual({ username })
  })
  test('should be set password', () => {
    const password = '123'
    const state: DeepPartial<LoginSchema> = {
      password,
    }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword({ password })))
      .toEqual({ password })
  })
  test('should be set isLoading', () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
    }

    expect(loginReducer(state as LoginSchema, loginByUsername.pending))
      .toEqual({
        error: undefined,
        isLoading: true,
      })
    expect(loginReducer(state as LoginSchema, loginByUsername.fulfilled))
      .toEqual({
        isLoading: false,
      })
    expect(loginReducer(state as LoginSchema, loginByUsername.rejected))
      .toEqual({
        isLoading: false,
      })
  })
  test('should be set error', () => {
    const state: DeepPartial<LoginSchema> = {}

    expect(loginReducer(state as LoginSchema, loginByUsername.pending))
      .toEqual({
        error: undefined,
        isLoading: true,
      })

    expect(loginReducer(state as LoginSchema, loginByUsername.fulfilled({
      id: 1,
      username: 'admin',
    }, '', {
      username: 'admin',
      password: '123',
    })))
      .toEqual({
        error: undefined,
        isLoading: false,
      })

    expect(loginReducer(state as LoginSchema, {
      type: loginByUsername.rejected.type,
      payload: 'Error',
    }))
      .toEqual({
        error: 'Error',
        isLoading: false,
      })
  })
})
