import { SELECT_PLAN } from '../actions/plan';

const initialState = null;

const users = (state = initialState, { type, plan }) => {
  switch (type) {
    case SELECT_PLAN:
      return plan;
    default:
      return state;
  }
};

export default users;
