import { takeLatest, select, call } from 'redux-saga/effects';
import { FINISH_ORDER } from '../actions/appFlow';
import post from '@/requests/postRequest';

function* finishOrder() {
  const state = yield select();
  // console.log('payload', state);
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
    // tutaj dodaj PUT z SUCCESS
  } catch (err) {
    if (err.response && err.response.data) {
      alert(err.response.data);
    } else {
      alert(err);
    }
    // tutaj dodaj PUT z ERROR i bedzie bajeczka!
  }
}

export const appFlow = [takeLatest(FINISH_ORDER, finishOrder)];
