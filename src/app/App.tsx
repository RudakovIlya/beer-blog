import { Suspense, useEffect } from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { AppRouter } from 'app/providers/Router'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div id={'app'} className={'app'}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className={'content-page'}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}
