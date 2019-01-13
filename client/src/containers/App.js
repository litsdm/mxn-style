import React from 'react';
import { withRouter } from 'react-router';
import shapes from 'shapes';

import ChoosePlanModal from 'components/ChoosePlanModal';

const { childrenShape } = shapes; // Work around for error when doing import { childrenShape } from 'shapes';

const App = ({ children }) => (
  <div className="content-container">
    {children}
    <ChoosePlanModal />
  </div>
);

App.propTypes = {
  children: childrenShape.isRequired
};

export default withRouter(App);
