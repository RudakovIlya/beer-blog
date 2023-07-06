import { createAppAsyncThunk } from 'shared/lib'
import { Article } from '../../types/article'

export const fetchArticleById = createAppAsyncThunk<Article, string>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const { data } = await extra.api.get<Article>(`articles/${articleId}`)
      if (!data) {
        throw new Error()
      }
      return data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
