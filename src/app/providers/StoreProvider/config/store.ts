import { combineReducers, configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState?: StateSchema) => {
  const reducer:ReducersMapObject<StateSchema> = {
    user: userReducer,
    counter: counterReducer,
  }
  return configureStore<StateSchema>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}
