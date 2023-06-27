import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { RouteObject } from 'react-router-dom'
import { ProfilePage } from 'pages/ProfilePage'

type ROUTES = 'main' | 'about' | 'notFound' | 'profile'

export const ROUTES_PATHS: Record<ROUTES, string> = {
  main: '/',
  about: 'about',
  profile: 'profile',
  notFound: '/*',
} as const

export const routeConfig: Record<ROUTES, RouteObject> = {
  main: {
    path: ROUTES_PATHS.main,
    element: <MainPage />,
  },
  about: {
    path: ROUTES_PATHS.about,
    element: <AboutPage />,
  },
  profile: {
    path: ROUTES_PATHS.profile,
    element: <ProfilePage />,
  },
  notFound: {
    path: ROUTES_PATHS.notFound,
    element: <NotFoundPage />,
  },
}
