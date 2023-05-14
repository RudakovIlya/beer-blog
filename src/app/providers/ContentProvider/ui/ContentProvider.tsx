import {FC, Suspense} from "react";
import {Outlet} from "react-router-dom";

interface Props {
  className?: string
}

export const ContentProvider: FC<Props> = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className={'page'}>
        <Outlet/>
      </div>
    </Suspense>
  )
};