import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/Counter'
import { userReducer } from 'entities/User'
import { loginReducer } from 'features/AuthByUserName'
import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState?: StateSchema) => {
  const reducer:ReducersMapObject<StateSchema> = {
    user: userReducer,
    login: loginReducer,
    counter: counterReducer,
  }
  return configureStore<StateSchema>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}

const store = createReduxStore()

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
