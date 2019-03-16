import { connect } from 'react-redux';

import StageButtons from './StageButtons';
import { setStage, finishOrder } from '@/store/actions/appFlow';

const mapStateToProps = state => {
  return {
    currentStage: state.appFlow.currentStage,
    sandwichDetails: state.sandwiches.sandwichDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStage: stage => dispatch(setStage(stage)),
    finishOrder: order => dispatch(finishOrder(order))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageButtons);
