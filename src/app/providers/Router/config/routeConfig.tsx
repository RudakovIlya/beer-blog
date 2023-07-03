import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { RouteProps } from 'react-router-dom'
import { ProfilePage } from 'pages/ProfilePage'

type ROUTES = 'main' | 'about' | 'notFound' | 'profile'

type AppRoutesProps = RouteProps & {
  isAuthOnly?: boolean
}

export const ROUTES_PATHS: Record<ROUTES, string> = {
  main: '/',
  about: 'about',
  profile: 'profile',
  notFound: '/*',
} as const

export const routeConfig: Record<ROUTES, AppRoutesProps> = {
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
    isAuthOnly: true,
  },
  notFound: {
    path: ROUTES_PATHS.notFound,
    element: <NotFoundPage />,
  },
}
