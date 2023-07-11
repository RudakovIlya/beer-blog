import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema'
import {
  fetchCommentsByArticleId,
} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'

const articleDetailsCommentAdapter = createEntityAdapter<Comment>({
  selectId: (model) => {
    return model.id
  },
})

export const getArticleComments = articleDetailsCommentAdapter.getSelectors<StateSchema>(
  (state) => {
    return state.articleDetailsComments || articleDetailsCommentAdapter.getInitialState()
  },
)

export const articleDetailsCommentSlice = createSlice({
  name: 'articleDetailsComment',
  initialState: articleDetailsCommentAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
        state.isLoading = false
        articleDetailsCommentAdapter.setAll(state, action.payload)
      })
      .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const {
  actions: articleDetailsCommentActions,
  reducer: articleDetailsCommentReducer,
} = articleDetailsCommentSlice
