import { createBrowserRouter } from 'react-router-dom'
import { App } from 'app/App'
import { PageError } from 'widgets/PageError'
import { Suspense } from 'react'
import { routeConfig } from '../config/routeConfig'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: Object.values(routeConfig),
    errorElement: <Suspense fallback={''}><PageError /></Suspense>,
  },
])
