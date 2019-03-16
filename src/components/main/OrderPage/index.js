import { connect } from 'react-redux';

import OrderPage from './OrderPage';
import { resetOrder } from '@/store/actions/appFlow';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    resetOrder: () => dispatch(resetOrder())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderPage);
