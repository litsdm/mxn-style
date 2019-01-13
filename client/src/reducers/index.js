import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import user from './user';
import plan from './plan';

export default (history) => combineReducers({
  router: connectRouter(history),
  user,
  plan
});
