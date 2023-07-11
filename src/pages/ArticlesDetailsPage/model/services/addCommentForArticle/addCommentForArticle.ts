import { createAppAsyncThunk } from 'shared/lib'
import { Comment } from 'entities/Comment'
import { getUserAuthData } from 'entities/User'
import { getArticleDetailsData } from 'entities/Article/model/selectors/getArticleDetails'
import {
  fetchCommentsByArticleId,
} from '../fetchCommentsByArticleId/fetchCommentsByArticleId'

export const addCommentForArticle = createAppAsyncThunk<Comment, string>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const {
      extra, rejectWithValue, getState, dispatch,
    } = thunkAPI

    const userData = getUserAuthData(getState())
    const article = getArticleDetailsData(getState())

    if (!userData || !text || !article) {
      return rejectWithValue('no data')
    }

    try {
      const { data } = await extra.api.post<Comment>('comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      })
      if (!data) {
        throw new Error()
      }
      dispatch(fetchCommentsByArticleId(article.id))
      return data
    } catch (e) {
      return rejectWithValue('error')
    }
  },
)
