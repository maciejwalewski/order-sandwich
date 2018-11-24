import { createStore, applyMiddleware } from 'redux';
import { createLogger } from "redux-logger";

import sandwiches from './reducers/reducer';

export const store = createStore(sandwiches, applyMiddleware(createLogger()));