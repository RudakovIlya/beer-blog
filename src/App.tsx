import React from 'react';
import {Counter} from "./components/Counter";

export const App = () => {
  return (
      <div className={'app'}>
        Hello App
        <Counter/>
      </div>
  );
};