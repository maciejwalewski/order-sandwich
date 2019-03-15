import {
  AUTH_LOGIN_TRY,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  SIGN_UP_TRY,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL
} from '../actions/auth';

const initialState = {
  loggedIn: false,
  loading: false,
  registerLoading: false,
  registerSuccess: false,
  currentUser: ''
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
      loggedIn: true,
      currentUser: action.payload
    };
  case AUTH_LOGIN_FAIL:
    return {
      ...state,
      loading: false,
      loggedIn: false
    };
  case SIGN_UP_TRY:
    return {
      ...state,
      registerLoading: true
    };
  case SIGN_UP_SUCCESS:
    return {
      ...state,
      registerLoading: false,
      registerSuccess: true
    };
  case SIGN_UP_FAIL:
    return {
      ...state,
      registerLoading: false,
      registerSuccess: false
    };
  }
  return state;
}
