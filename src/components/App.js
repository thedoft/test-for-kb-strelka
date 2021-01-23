import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from './Home';
import Map from './Map';

export default function App() {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/map">
          <Map />
        </Route>

        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </main>
  );
}
