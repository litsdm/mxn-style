/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';

import App from '@containers/App';
import Home from '@containers/Home';
import Register from '@containers/Register';
import Designer from '@containers/Designer';

const Routes = () => (
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/:slug" component={Designer} />
    </Switch>
  </App>
);

export default Routes;
