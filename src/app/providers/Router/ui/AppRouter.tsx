import { PageLoader } from 'widgets/PageLoader'
import { memo, Suspense, useMemo } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'
import { routeConfig } from '../config/routeConfig'

export const AppRouter = memo(() => {
  const isAuth = useSelector(getUserAuthData)

  const routes = useMemo(() => {
    return Object.values(routeConfig).filter((route) => {
      return !(route.isAuthOnly && !isAuth)
    })
  }, [isAuth])

  return (
    <Routes>
      {routes.map(({ element, path }) => {
        return (
          <Route
            key={path}
            path={path}
            element={(
              <Suspense fallback={<PageLoader />}>
                <div className={'page'}>
                  {element}
                </div>
              </Suspense>
            )}
          />
        )
      })}
    </Routes>
  )
})

// export default AppRouter
