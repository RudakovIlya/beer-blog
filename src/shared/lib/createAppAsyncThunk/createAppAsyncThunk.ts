import { createAsyncThunk } from '@reduxjs/toolkit'

import { AppDispatch, StateSchema, ThunkExtraArg } from 'app/providers/StoreProvider'

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: StateSchema
  dispatch: AppDispatch
  rejectValue: string
  extra: ThunkExtraArg
}
>()
