import { connect } from 'react-redux';

import StageButtons from './StageButtons';
import { setStage, finishOrder } from '@/store/actions/appFlow';

const mapStateToProps = state => {
  return {
    currentStage: state.appFlow.currentStage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStage: stage => dispatch(setStage(stage)),
    finishOrder: (order, currentUser) => dispatch(finishOrder({ order, currentUser }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageButtons);
