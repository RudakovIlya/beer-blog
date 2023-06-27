import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { loginByUsername } from '../services/loginByUsername/loginByUsername'
import { LoginSchema } from '../types/loginSchema'

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: '',
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<{username: string}>) => {
      state.username = action.payload.username
    },
    setPassword: (state, action: PayloadAction<{password: string}>) => {
      state.password = action.payload.password
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginByUsername.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(loginByUsername.fulfilled, (state) => {
        state.error = undefined
        state.isLoading = false
      })
      .addCase(loginByUsername.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
