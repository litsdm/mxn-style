export const ADD_USER = 'ADD_USER';
export const SET_STYLESHEET = 'SET_STYLESHEET';

export const addUser = (user) => (
  {
    type: ADD_USER,
    user
  }
);

export const setStylesheet = (stylesheet) => (
  {
    type: SET_STYLESHEET,
    stylesheet
  }
)
