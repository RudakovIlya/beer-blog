import { RouteProps } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { AboutPage } from 'pages/AboutPage'
import { NotFoundPage } from 'pages/NotFoundPage'
import { ProfilePage } from 'pages/ProfilePage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ArticlesDetailsPage } from 'pages/ArticlesDetailsPage'

type ROUTES = 'main' | 'about' | 'notFound' | 'profile' | 'articles' | 'articles_details'

export type AppRoutesProps = RouteProps & {
  isAuthOnly?: boolean
}

export const ROUTES_PATHS: Record<ROUTES, string> = {
  main: '/',
  about: 'about',
  profile: 'profile',
  articles: 'articles',
  articles_details: 'articles/',
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
  articles: {
    path: ROUTES_PATHS.articles,
    element: <ArticlesPage />,
    isAuthOnly: true,
  },
  articles_details: {
    path: `${ROUTES_PATHS.articles_details}:id`,
    element: <ArticlesDetailsPage />,
    isAuthOnly: true,
  },
  notFound: {
    path: ROUTES_PATHS.notFound,
    element: <NotFoundPage />,
  },
}
