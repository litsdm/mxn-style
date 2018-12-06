import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import './app.global.css';

import store, { history } from './store';

require('dotenv').config()

render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
