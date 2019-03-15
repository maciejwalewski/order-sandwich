import { SET_STAGE, RESET_ORDER } from '../actions/appFlow';

const initialState = {
  currentStage: 1
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
  }
  return state;
}
