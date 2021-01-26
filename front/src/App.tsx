import React from 'react';
import { Route, Switch } from 'react-router';
import Home from './Feature/Home/Home';
import Postcode from './Feature/test';
import Tree from './lib/image/tree.svg';

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  );
}

export default App;
