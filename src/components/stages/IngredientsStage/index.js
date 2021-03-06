import { connect } from 'react-redux';

import IngredientsStage from './IngredientsStage';

const mapStateToProps = state => {
  return {
    currentStage: state.appFlow.currentStage,
    ingredients: state.sandwiches.sandwichDetails.ingredients
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setIngredients: ingredients => {
      dispatch({
        type: 'SET_INGREDIENTS',
        payload: ingredients
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IngredientsStage);
