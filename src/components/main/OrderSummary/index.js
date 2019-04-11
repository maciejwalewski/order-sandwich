import { connect } from 'react-redux';

import OrderSummary from './OrderSummary';

const mapStateToProps = state => {
  return {
    sandwichDetails: state.sandwiches.sandwichDetails,
    orderSuccess: state.appFlow.orderSuccess,
    orderError: state.appFlow.orderError
  };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummary);
