import { AUTH_LOGIN_TRY, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL } from '../actions/auth';

const initialState = {
  loggedIn: false,
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
  case AUTH_LOGIN_TRY:
    return {
      ...state,
      loading: true
    };
  case AUTH_LOGIN_SUCCESS:
    return {
      ...state,
      loading: false,
      loggedIn: true
    };
  case AUTH_LOGIN_FAIL:
    return {
      ...state,
      loading: false,
      loggedIn: false
    };
  }
  return state;
}
