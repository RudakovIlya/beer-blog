import { createAppAsyncThunk } from 'shared/lib'
import { Comment } from 'entities/Comment'

export const fetchCommentsByArticleId = createAppAsyncThunk<Comment[], string>(
  'articleDetailsPage/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    if (!articleId) {
      return rejectWithValue('error')
    }

    try {
      const { data } = await extra.api.get<Comment[]>('comments/', {
        params: {
          articleId,
          _expand: 'user',
        },
      })
      if (!data) {
        throw new Error()
      }
      return data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
