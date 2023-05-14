import {clsx} from "shared/lib";
import {Suspense} from "react";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useTheme} from "app/providers/ThemeProvider";
import {ContentProvider} from "app/providers/ContentProvider";
import './styles/index.scss'

export const App = () => {

  const {theme} = useTheme()

  return (
    <div className={clsx('app', {}, theme)}>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar/>
        <div className={'content-page'}>
          <Sidebar/>
          <ContentProvider/>
        </div>
      </Suspense>
    </div>
  );
};
