import {clsx} from "shared/lib";
import {Outlet} from 'react-router-dom';
import {useTheme} from "app/providers/ThemeProvider";
import {Suspense} from "react";
import {Navbar} from "widgets/Navbar";
import './styles/index.scss'
import {Sidebar} from "widgets/Sidebar";

export const App = () => {

  const {theme} = useTheme()

  return (
    <div className={clsx('app', {}, theme)}>
      <Navbar/>
      <div className={'content-page'}>
        <Sidebar/>
        <Suspense fallback={<div>Loading...</div>}>
          <div className={'page'}>
            <Outlet/>
          </div>
        </Suspense>
      </div>
    </div>
  );
};