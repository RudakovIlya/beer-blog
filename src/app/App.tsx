import { clsx } from 'shared/lib'
import { Suspense } from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { ContentProvider } from 'app/providers/ContentProvider'

export const App = () => {
  return (
    <div className={clsx('app')}>
      <Suspense fallback={<PageLoader />}>
        <Navbar />
        <div className={'content-page'}>
          <Sidebar />
          <ContentProvider />
        </div>
      </Suspense>
    </div>
  )
}
