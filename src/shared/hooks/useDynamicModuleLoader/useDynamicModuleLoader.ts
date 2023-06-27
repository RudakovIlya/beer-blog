import { useEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider'
import { Reducer } from '@reduxjs/toolkit'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface UseDynamicModuleLoader {
  reducers: ReducerList
  removeAfterUnmount?: boolean
}

export const useDynamicModuleLoader = (config: UseDynamicModuleLoader) => {
  const {
    reducers,
    removeAfterUnmount,
  } = config
  const store = useStore() as ReduxStoreWithManager

  const dispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers)
      .forEach(([name, reducer]: ReducersListEntry) => {
        store.reducerManager.add(name, reducer)
        dispatch({ type: `@@INIT ${name} reducer` })
      })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers)
          .forEach(([name]: ReducersListEntry) => {
            store.reducerManager.remove('login')
            dispatch({ type: `@@DESTROY ${name} reducer` })
          })
      }
    }
    // eslint-disable-next-line
  }, [])
}
