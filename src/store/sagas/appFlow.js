import { takeLatest, select, call, put } from 'redux-saga/effects';
import { FINISH_ORDER, FINISH_ORDER_SUCCESS, FINISH_ORDER_FAIL } from '../actions/appFlow';
import post from '@/requests/postRequest';

function* finishOrder() {
  const state = yield select();
  const sandwichDetails = state.sandwiches.sandwichDetails;
  const orderData = {
    user: state.auth.currentUser,
    time: new Date()
  };
  const requestData = {
    ...sandwichDetails,
    orderData
  };

  try {
    const req = yield call(post, ['/order', requestData]);
    console.log('success', req);
    const payload = 'Set the sails! We are on our way!';
    yield put({ type: FINISH_ORDER_SUCCESS, payload });
  } catch (err) {
    if (err.response && err.response.data) {
      const payload = err.response.data;
      yield put({ type: FINISH_ORDER_FAIL, payload });
    } else {
      const payload = err;
      yield put({ type: FINISH_ORDER_FAIL, payload });
    }
  }
}

export const appFlow = [takeLatest(FINISH_ORDER, finishOrder)];
