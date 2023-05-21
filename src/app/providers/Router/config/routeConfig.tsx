import { RouteObject } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'

type ROUTES = 'main' | 'about' | 'notFound'

export const ROUTES_PATHS: Record<ROUTES, string> = {
  main: '/',
  about: 'about',
  notFound: '/*',
} as const

export const routeConfig: Record<ROUTES, RouteObject> = {
  main: {
    index: true,
    element: <MainPage />,
  },
  about: {
    path: ROUTES_PATHS.about,
    element: <AboutPage />,
  },
  notFound: {
    path: ROUTES_PATHS.notFound,
    element: <NotFoundPage />,
  },
}
