import { SET_BREAD, SET_BUTTER, SET_INGREDIENTS } from '../actions/sandwiches';

const initialState = {
  sandwichDetails: {
    ingredients: {}
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
  case SET_BREAD:
    return {
      ...state,
      sandwichDetails: {
        ...state.sandwichDetails,
        bread: action.payload
      }
    };

  case SET_BUTTER:
    return {
      ...state,
      sandwichDetails: {
        ...state.sandwichDetails,
        butter: action.payload
      }
    };

  case SET_INGREDIENTS:
    return {
      ...state,
      sandwichDetails: {
        ...state.sandwichDetails,
        ingredients: action.payload
      }
    };
  }
  return state;
}
