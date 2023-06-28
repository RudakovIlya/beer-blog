import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'
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
  const navigate = useNavigate()
  const store = createReduxStore(
    initialState as StateSchema,
    asyncReducers as ReducersMapObject<StateSchema>,
    navigate,
  )
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
