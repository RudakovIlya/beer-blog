import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { DeepPartial } from '@reduxjs/toolkit'
import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'

interface Props {
  initialState?: DeepPartial<StateSchema>;
}

export const StoreProvider = ({ initialState, children }: PropsWithChildren<Props>) => {
  const store = createReduxStore(initialState as StateSchema)
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
