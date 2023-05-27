import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { router } from 'app/providers/Router'
import 'shared/config/i18n/i18n'
import './app/styles/index.scss'

const root = createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
)
