import * as actionTypes from "./userActionTypes";

export const loginUser = (user) => {
  return {
    type: actionTypes.LOGIN_USER,
    payload: { user: user },
  };
};

export const logoutUser = () => {
  return {
    type: actionTypes.LOGOUT_USER,
    payload: { user: null },
  };
};
