import { FC, Suspense } from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
  className?: string
}

export const ContentProvider: FC<Props> = () => (
  <Suspense fallback={<div>{''}</div>}>
    <div className={'page'}>
      <Outlet />
    </div>
  </Suspense>
)
