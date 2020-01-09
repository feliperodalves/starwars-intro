import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Intro from './pages/Intro';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/intro" component={Intro} />
    </Switch>
  );
}
