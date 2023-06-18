import { render } from 'react-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { RouterProvider } from 'react-router-dom'

import './app/styles/index.scss'
import './shared/config/i18n/i18n'
import { router } from 'app/providers/Router'
import { StoreProvider } from 'app/providers/StoreProvider'

render(
  <StoreProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </StoreProvider>,
  document.getElementById('root'),
)
