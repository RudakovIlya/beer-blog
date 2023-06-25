import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit'
import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'

interface Props {
  initialState?: DeepPartial<StateSchema>;
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider = ({
  initialState,
  asyncReducers,
  children,
}:
  PropsWithChildren<Props>) => {
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
  )
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
