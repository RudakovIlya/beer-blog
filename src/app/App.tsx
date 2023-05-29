import { clsx } from 'shared/lib'
import { Suspense } from 'react'
import { PageLoader } from 'widgets/PageLoader'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'
import { useTheme } from 'app/providers/ThemeProvider'
import { ContentProvider } from 'app/providers/ContentProvider'

export const App = () => {
  const { theme } = useTheme()

  return (
    <div className={clsx('app', {}, theme)}>
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
