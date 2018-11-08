import jwtDecode from 'jwt-decode';
import { ADD_USER, SET_STYLESHEET } from '../actions/user';

import { fakeUser } from '@fixtures';

const token = localStorage.getItem('mxnToken');
const initialState = token ? jwtDecode(token) : fakeUser;
console.log(initialState);

const users = (state = initialState, { type, user, stylesheet }) => {
  switch (type) {
    case ADD_USER:
      return user;
    case SET_STYLESHEET:
      return {
        ...user,
        stylesheet
      };
    default:
      return state;
  }
};

export default users;
