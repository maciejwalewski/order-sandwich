import { all } from 'redux-saga/effects';

import { auth } from './auth';
import { appFlow } from './appFlow';

export default function*() {
  yield all([...auth, ...appFlow]);
}
