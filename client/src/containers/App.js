import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import shapes from 'shapes';

import { selectPlan } from 'actions/plan'

import ChoosePlanModal from 'components/ChoosePlanModal';

const { childrenShape } = shapes; // Work around for error when doing import { childrenShape } from 'shapes';

const mapDispatchToProps = dispatch => ({
  addPlan: plan => dispatch(selectPlan(plan))
})

const App = ({ children, addPlan }) => {
  const selectPlanAndClose = (plan) => {
    document.getElementById('choosePlanModal').style.display = 'none';
    addPlan(plan);
  }
  return (
    <div className="content-container">
      {children}
      <ChoosePlanModal selectPlan={selectPlanAndClose} />
    </div>
  );
}

App.propTypes = {
  children: childrenShape.isRequired
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(App)
);
