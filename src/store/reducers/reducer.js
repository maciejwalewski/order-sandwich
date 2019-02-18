const initialState = {
  sandwichDetails: {
    bread: 0,
    ingredients: []
  },
  currentStage: 1
};

export default function sandwiches(state = initialState, action) {
  switch (action.type) {
  case 'SET_BREAD':
    return {
      ...state,
      sandwichDetails: {
        ingredients: state.sandwichDetails.ingredients,
        bread: action.payload
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
