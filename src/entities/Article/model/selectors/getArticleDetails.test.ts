import { StateSchema } from 'app/providers/StoreProvider'

import { Article } from '../types/article'
import { getArticleDetailsIsLoading, getArticleDetailsData, getArticleDetailsError }
  from './getArticleDetails'

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

describe('getArticleDetailsIsLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true,
      },
    }
    expect(getArticleDetailsIsLoading(state as StateSchema))
      .toBeTruthy()
  })
  test('should return false', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: false,
      },
    }
    expect(getArticleDetailsIsLoading(state as StateSchema))
      .toBeFalsy()
  })
  test('should return undefined at empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsIsLoading(state as StateSchema))
      .toBeUndefined()
  })
})

describe('getArticleDetailsData', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        data,
      },
    }
    expect(getArticleDetailsData(state as StateSchema))
      .toEqual(data)
  })
  test('should return undefined at empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsIsLoading(state as StateSchema))
      .toBeUndefined()
  })
})

describe('getArticleDetailsError', () => {
  test('should return current error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'Error',
      },
    }
    expect(getArticleDetailsError(state as StateSchema))
      .toBe('Error')
  })
  test('should return undefined at empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema))
      .toBeUndefined()
  })
})
