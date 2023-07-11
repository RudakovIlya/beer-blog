import {
  createEntityAdapter, createSlice, isPending, isRejected, isRejectedWithValue,
} from '@reduxjs/toolkit'
import { Comment } from 'entities/Comment'
import { StateSchema } from 'app/providers/StoreProvider'
import { ArticleDetailsCommentSchema } from '../types/articleDetailsCommentSchema'
import {
  addCommentForArticle,
} from '../services/addCommentForArticle/addCommentForArticle'
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

const pending = isPending(fetchCommentsByArticleId, addCommentForArticle)
const rejected = isRejected(fetchCommentsByArticleId, addCommentForArticle)

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
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action) => {
        state.isLoading = false
        articleDetailsCommentAdapter.setAll(state, action.payload)
      })
      .addMatcher(pending, (state) => {
        state.isLoading = true
        state.error = undefined
      })
      .addMatcher(rejected, (state, action) => {
        state.isLoading = false
        console.log('error')
        console.log(action.payload)
        state.error = action.payload
      })
  },
})

export const {
  actions: articleDetailsCommentActions,
  reducer: articleDetailsCommentReducer,
} = articleDetailsCommentSlice
