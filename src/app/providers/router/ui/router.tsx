import {createBrowserRouter} from "react-router-dom";
import {App} from "app/App";
import {routeConfig} from "shared/config";

console.log(Object.values(routeConfig))

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: Object.values(routeConfig)
  }
])