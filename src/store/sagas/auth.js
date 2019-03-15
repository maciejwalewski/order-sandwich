import { call, put, takeLatest } from 'redux-saga/effects';

import { AUTH_LOGIN_TRY, AUTH_LOGIN_SUCCESS, AUTH_LOGIN_FAIL } from '../actions/auth';
import { loginFirebase } from '@/firebase/index';

function* tryLogin({ payload }) {
  console.log('eloooo');
  try {
    const userData = yield call(loginFirebase, [payload.email, payload.password]);
    console.log('userdata', userData);
    yield put({ type: AUTH_LOGIN_SUCCESS });
  } catch (err) {
    yield put({ type: AUTH_LOGIN_FAIL });
    alert(err);
  }
}

export default function*() {
  yield takeLatest(AUTH_LOGIN_TRY, tryLogin);
}
