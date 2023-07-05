import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { updateProfileData } from '../services/updateProfileData/updateProfileData'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { ProfileSchema, Profile } from '../types/profile'

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state) => {
      state.readonly = true
      state.validateErrors = undefined
      state.form = state.data
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = { ...state.form, ...action.payload }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(updateProfileData.pending, (state) => {
        state.isLoading = true
        state.validateErrors = undefined
      })
      .addCase(updateProfileData.fulfilled, (state, action) => {
        state.isLoading = false
        state.readonly = true
        state.data = action.payload
        state.form = action.payload
        state.validateErrors = undefined
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.isLoading = false
        console.log(action.payload)
        state.validateErrors = action.payload
      })
  },
})

// Action creators are generated for each case reducer function
export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice
