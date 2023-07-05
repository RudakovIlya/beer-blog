import { PageLoader } from 'widgets/PageLoader'
import { memo, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { routeConfig, AppRoutesProps } from '../config/routeConfig'
import { RequireAuth } from './RequireAuth'

const renderWithWrapper = ({
  path,
  element,
  isAuthOnly,
}: AppRoutesProps) => {
  const component = (
    <Suspense fallback={<PageLoader />}>
      <div className={'page'}>
        {element}
      </div>
    </Suspense>
  )
  return (
    <Route
      key={path}
      path={path}
      element={isAuthOnly ? (
        <RequireAuth>{component}</RequireAuth>
      ) : component}
    />
  )
}

export const AppRouter = memo(() => {
  return (
    <Routes>
      {Object.values(routeConfig)
        .map(renderWithWrapper)}
    </Routes>
  )
})

// export default AppRouter
