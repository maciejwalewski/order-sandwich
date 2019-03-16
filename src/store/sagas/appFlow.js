import { takeLatest } from 'redux-saga/effects';
import { FINISH_ORDER } from '../actions/appFlow';

function* finishOrder({ payload }) {
  console.log('payload', payload);
}

// export default function*() {
//   yield takeLatest(FINISH_ORDER, finishOrder);
// }

export const appFlow = [takeLatest(FINISH_ORDER, finishOrder)];
