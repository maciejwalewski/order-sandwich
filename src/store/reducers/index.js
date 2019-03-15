import { combineReducers } from 'redux';

import sandwiches from './sandwiches';
import appFlow from './appFlow';
import auth from './auth';

const rootReducer = combineReducers({
  sandwiches,
  appFlow,
  auth
});

export default rootReducer;
