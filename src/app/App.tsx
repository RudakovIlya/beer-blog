import {clsx} from "shared/lib";
import {Link, Outlet} from 'react-router-dom';
import {useTheme} from "app/providers/ThemeProvider";
import './styles/index.scss'
import {Suspense} from "react";

export const App = () => {

  const {theme, onChangeTheme} = useTheme()

  return (
    <div className={clsx('app', {}, theme)}>
      <button onClick={onChangeTheme}>switch theme</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet/>
      </Suspense>
    </div>
  );
};