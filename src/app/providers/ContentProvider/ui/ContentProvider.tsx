import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { PageLoader } from 'widgets/PageLoader'

interface Props {
  className?: string
}

export const ContentProvider: FC<Props> = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <div className={'page'}>
        <Outlet />
      </div>
    </Suspense>
  )
}
