import { useEffect } from 'react'
import { useStore } from 'react-redux'
import { ReduxStoreWithManager, StateSchemaKey } from 'app/providers/StoreProvider'
import { Reducer } from '@reduxjs/toolkit'
import { useAppDispatch } from 'shared/hooks/useAppDispatch/useAppDispatch'

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}

interface UseDynamicModuleLoader {
  reducers: ReducerList
  removeAfterUnmount?: boolean
}

export const useDynamicModuleLoader = (config: UseDynamicModuleLoader) => {
  const {
    reducers,
    removeAfterUnmount = true,
  } = config
  const store = useStore() as ReduxStoreWithManager

  const dispatch = useAppDispatch()

  useEffect(() => {
    Object.entries(reducers)
      .forEach(([name, reducer]) => {
        store.reducerManager.add(name as StateSchemaKey, reducer)
        dispatch({ type: `@@INIT ${name} reducer` })
      })
    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers)
          .forEach(([name]) => {
            store.reducerManager.remove(name as StateSchemaKey)
            dispatch({ type: `@@DESTROY ${name} reducer` })
          })
      }
    }
    // eslint-disable-next-line
  }, [])
}
