import { createAppAsyncThunk } from 'shared/lib'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'
import { ROUTES_PATHS } from 'app/providers/Router'

const LOGIN_ERRORS = {
  INCORRECT_DATA: '',
  SERVER_ERROR: '',
} as const

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAppAsyncThunk<User, LoginByUsernameProps>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI
    try {
      const { data } = await extra.api.post('login', {
        username, password,
      })
      if (!data) {
        throw new Error()
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      dispatch(userActions.setAuthData(data))

      return data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
