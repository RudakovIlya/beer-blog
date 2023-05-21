import { RouteObject } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'

type ROUTES = 'main' | 'about'

export const ROUTES_PATHS: Record<ROUTES, string> = {
  main: '/',
  about: 'about',
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
}
