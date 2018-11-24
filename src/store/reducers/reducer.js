const initialState = {
  sandwichDetails: {
    bread: 0,
    ingredients: [
      
    ],
  }
};

export default function sandwiches(
  state = initialState,
  action
) {
  switch (action.type) {
    case "SET_BREAD":
    return {
      ...state,
      sandwichDetails: {
        ingredients: state.sandwichDetails.ingredients,
        bread: action.payload,
      }
    }
  }
  return state;

};