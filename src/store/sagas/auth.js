import { call, put, takeLatest } from 'redux-saga/effects';

import {
  AUTH_LOGIN_TRY,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAIL,
  SIGN_UP_TRY,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAIL
} from '../actions/auth';
import { loginFirebase, signUpFirebase } from '@/firebase/index';

function* tryLogin({ payload }) {
  try {
    const userData = yield call(loginFirebase, [payload.email, payload.password]);
    yield put({ type: AUTH_LOGIN_SUCCESS, payload: userData.user.email });
  } catch (err) {
    yield put({ type: AUTH_LOGIN_FAIL });
    alert(err);
  }
}

function* trySignUp({ payload }) {
  try {
    const userData = yield call(signUpFirebase, [payload.email, payload.password]);
    yield put({ type: SIGN_UP_SUCCESS });
  } catch (err) {
    yield put({ type: SIGN_UP_FAIL });
    alert(err);
  }
}

export const auth = [takeLatest(AUTH_LOGIN_TRY, tryLogin), takeLatest(SIGN_UP_TRY, trySignUp)];
