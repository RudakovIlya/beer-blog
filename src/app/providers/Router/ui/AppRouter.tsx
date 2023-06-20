import { PageLoader } from 'widgets/PageLoader'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig } from '../config/routeConfig'

export const AppRouter = () => {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => {
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
}

// export default AppRouter
