import { SET_STAGE, RESET_ORDER, FINISH_ORDER_SUCCESS, FINISH_ORDER_FAIL } from '../actions/appFlow';

const initialState = {
  currentStage: 1,
  orderError: '',
  orderSuccess: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
  case SET_STAGE:
    return {
      ...state,
      currentStage: state.currentStage + action.payload
    };
  case RESET_ORDER:
    return {
      ...initialState
    };
  case FINISH_ORDER_SUCCESS:
    return {
      ...state,
      orderSuccess: action.payload
    };

  case FINISH_ORDER_FAIL:
    return {
      ...state,
      orderError: action.payload
    };
  }
  return state;
}
