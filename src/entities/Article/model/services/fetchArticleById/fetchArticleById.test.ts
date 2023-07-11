import { TestAsyncThunk } from 'shared/config/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchArticleById } from './fetchArticleById'
import { Article } from '../../types/article'

const data: Article = {
  id: '1',
  author: 'Ilya',
  title: 'Title',
  subtitle: 'subtitle',
  img: 'url.jpg',
  views: 22,
  createdAt: '20.05.2023',
  type: ['IT'],
  blocks: [],
}

describe('fetchArticleById', () => {
  test('should be success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)

    thunk.api.get.mockReturnValue(Promise.resolve({ data }))

    const result = await thunk.callThunk('1')
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(data)
  })
  test('should be rejected', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk('1')

    expect(result.meta.requestStatus).toBe('rejected')
  })
})
