import { createAsyncThunk } from '@reduxjs/toolkit'
import { AppDispatch, RootState } from 'app/providers/StoreProvider/config/store'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: RootState
  dispatch: AppDispatch
  rejectValue: string
  extra: { s: string; n: number }
}
>()
