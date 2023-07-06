import { createSlice } from '@reduxjs/toolkit'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import { ArticleDetailsSchema } from '../types/articleDetailsSchema'

const initialState: ArticleDetailsSchema = {
  isLoading: false,
  error: undefined,
  data: undefined,
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
} = articleDetailsSlice
