const initialState = {
  sandwichDetails: {
    ingredients: {}
  },
  currentStage: 1
};

export default function sandwiches(state = initialState, action) {
  switch (action.type) {
  case 'SET_BREAD':
    return {
      ...state,
      sandwichDetails: {
        ...state.sandwichDetails,
        bread: action.payload
      }
    };

  case 'SET_BUTTER':
    return {
      ...state,
      sandwichDetails: {
        ...state.sandwichDetails,
        butter: action.payload
      }
    };

  case 'SET_INGREDIENTS':
    return {
      ...state,
      sandwichDetails: {
        ...state.sandwichDetails,
        ingredients: action.payload
      }
    };

  case 'SET_STAGE':
    return {
      ...state,
      currentStage: state.currentStage + action.payload
    };

  case 'RESET_ORDER':
    return {
      ...initialState
    };
  }
  return state;
}
