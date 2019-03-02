import { connect } from 'react-redux';

import StageButtons from './StageButtons';

const mapStateToProps = state => {
  return {
    currentStage: state.currentStage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStage: stage => {
      dispatch({
        type: 'SET_STAGE',
        payload: stage
      });
    },
    finishOrder: () => {
      dispatch({
        type: 'FINISH_ORDER'
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageButtons);
