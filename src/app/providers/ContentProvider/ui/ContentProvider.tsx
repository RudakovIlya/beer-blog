import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'

export const ContentProvider = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className={'page'}>
        <Outlet />
      </div>
    </Suspense>
  )
}
