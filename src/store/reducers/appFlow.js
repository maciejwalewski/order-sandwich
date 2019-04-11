import { 
  SET_STAGE,
  RESET_ORDER,
  FINISH_ORDER,
  FINISH_ORDER_SUCCESS,
  FINISH_ORDER_FAIL
} from '../actions/appFlow';

const initialState = {
  currentStage: 1,
  orderError: '',
  orderSuccess: '',
  orderLoading: false
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
  case FINISH_ORDER:
    return {
      ...state,
      orderLoading: true
    };
  case FINISH_ORDER_SUCCESS:
    return {
      ...state,
      orderSuccess: action.payload,
      orderLoading: false
    };

  case FINISH_ORDER_FAIL:
    return {
      ...state,
      orderError: action.payload,
      orderLoading: false
    };
  }
  return state;
}
