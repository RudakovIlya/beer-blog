import {Suspense} from 'react';
import {clsx} from "shared/lib";
import {Link, Route, Routes} from 'react-router-dom';
import {MainPage} from "pages/MainPage";
import {AboutPage} from "pages/AboutPage";
import {useTheme} from "app/providers/ThemeProvider";
import './styles/index.scss'

export const App = () => {

  const {theme, onChangeTheme} = useTheme()

  return (
    <div className={clsx('app', {}, theme)}>
      <button onClick={onChangeTheme}>switch theme</button>
      <Link to={'/'}>Home</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/'} element={<MainPage/>}/>
          <Route path={'/about'} element={<AboutPage/>}/>
        </Routes>
      </Suspense>
    </div>
  );
};