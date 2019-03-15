import { connect } from 'react-redux';

import BreadStage from './BreadStage';

const mapStateToProps = state => {
  return {
    currentStage: state.appFlow.currentStage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBread: bread => {
      dispatch({
        type: 'SET_BREAD',
        payload: bread
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BreadStage);
