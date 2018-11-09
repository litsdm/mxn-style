import jwtDecode from 'jwt-decode';
import { ADD_USER, UPDATE_USER } from '../actions/user';

import { fakeUser } from '@fixtures';

const token = localStorage.getItem('mxnToken');
const initialState = token ? jwtDecode(token) : fakeUser;

const users = (state = initialState, { type, user, properties }) => {
  switch (type) {
    case ADD_USER:
      return user;
    case UPDATE_USER:
      return {
        ...state,
        ...properties
      };
    default:
      return state;
  }
};

export default users;
