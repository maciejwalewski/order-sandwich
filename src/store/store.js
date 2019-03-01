import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';

import sandwiches from './reducers/reducer';

const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  sandwiches,
  composeEnhancers(applyMiddleware(createLogger()))
);
