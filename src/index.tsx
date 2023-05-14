import {render} from "react-dom";
import {ThemeProvider} from "app/providers/ThemeProvider";
import {router} from "app/providers/router";
import {RouterProvider} from "react-router-dom";

render(
  <ThemeProvider>
    <RouterProvider router={router}/>
  </ThemeProvider>,
  document.getElementById('root')
)