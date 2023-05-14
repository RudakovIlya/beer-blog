import {createBrowserRouter} from "react-router-dom";
import {App} from "app/App";
import {routeConfig} from "shared/config";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: Object.values(routeConfig)
  }
])