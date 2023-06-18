import { PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/store'
import { StateSchema } from '../config/StateSchema'

interface Props {
  initialState?: StateSchema
}

export const StoreProvider = ({ initialState, children }: PropsWithChildren<Props>) => {
  const store = createReduxStore(initialState)
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
