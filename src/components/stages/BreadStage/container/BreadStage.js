import { connect } from 'react-redux';

import BreadStage from '../component/BreadStage';

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setBread: (bread) => {
      dispatch({
        type: "SET_BREAD",
        payload: bread,
      })
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(BreadStage);