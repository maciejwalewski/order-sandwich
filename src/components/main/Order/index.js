import { connect } from 'react-redux';

import Order from './Order';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    resetOrder: () => {
      dispatch({
        type: 'RESET_ORDER'
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Order);
