import { render } from 'react-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { RouterProvider } from 'react-router-dom'

import './app/styles/index.scss'
import './shared/config/i18n/i18n'
import { router } from 'app/providers/Router/ui/router'

render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
  document.getElementById('root'),
)
