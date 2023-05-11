import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Counter} from "./components/Counter";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {HomePageAsync} from "./pages/HomePage/HomePage.async";
import clsx from 'clsx'
import {useTheme} from "./theme/useTheme";

export const App = () => {
  const {theme, onChangeTheme} = useTheme()

  return (
      <div className={clsx('app', theme)}>
        <button onClick={onChangeTheme}>switch theme</button>
        <Link to={'/'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Counter/>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={'/'} element={<HomePageAsync/>}/>
            <Route path={'/about'} element={<AboutPageAsync/>}/>
          </Routes>
        </Suspense>
      </div>
  );
};