import React from 'react';
import { withRouter } from 'react-router';
import { childrenShape } from '@shapes';

const App = ({ children }) => (
  <div className="content-container">
    {children}
  </div>
);

App.propTypes = {
  children: childrenShape.isRequired
};

export default withRouter(App);
