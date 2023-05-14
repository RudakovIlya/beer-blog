import {RouteObject} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";

export enum ROUTES {
  MAIN = 'main',
  ABOUT = 'about'
}

export const RoutePath: Record<ROUTES, string> = {
  [ROUTES.MAIN]: '/',
  [ROUTES.ABOUT]: 'about',
}

export const routeConfig: Record<ROUTES, RouteObject> = {
  [ROUTES.MAIN]: {
    index: true,
    element: <MainPage/>,
  },
  [ROUTES.ABOUT]: {
    path: RoutePath[ROUTES.ABOUT],
    element: <AboutPage/>,
  },
}
