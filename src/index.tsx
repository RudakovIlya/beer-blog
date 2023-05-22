import { render } from 'react-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { RouterProvider } from 'react-router-dom'
import { router } from 'app/providers/Router'
import 'shared/config/i18n/i18n'
import './app/styles/index.scss'

render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
  document.getElementById('root'),
)
