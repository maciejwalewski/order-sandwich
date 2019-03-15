import { connect } from 'react-redux';

import OrderPage from './OrderPage';

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
)(OrderPage);
