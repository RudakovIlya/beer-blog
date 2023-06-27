import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider'
import { Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'

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

  const dispatch = useAppDispatch()

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
            store.reducerManager.remove(name)
            dispatch({ type: `@@DESTROY ${name} reducer` })
          })
      }
    }
    // eslint-disable-next-line
  }, [])
}
