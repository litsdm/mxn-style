/* eslint flowtype-errors/show-errors: 0 */
import React from 'react';
import { Switch, Route } from 'react-router';

import App from '@containers/App';
import Home from '@containers/Home';
import Register from '@containers/Register';
import Designer from '@containers/Designer';
import ComingSoon from '@containers/ComingSoon';

const Routes = () => (
  <App>
    <Switch>
      <Route path="/" component={ComingSoon} />
      <Route path="/home" component={Home} />
      <Route path="/register" component={Register} />
      <Route path="/:slug" component={Designer} />
    </Switch>
  </App>
);

export default Routes;
