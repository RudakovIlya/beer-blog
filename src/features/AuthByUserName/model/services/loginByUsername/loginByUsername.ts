import axios from 'axios'
import { createAppAsyncThunk } from 'shared/lib'
import { User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

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
    try {
      const { data } = await axios.post('http://localhost:8000/login', {
        username, password,
      })
      if (!data) {
        throw new Error()
      }
      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data))
      thunkAPI.dispatch(userActions.setAuthData(data))
      return data
    } catch (e) {
      return thunkAPI.rejectWithValue('error')
    }
  },
)