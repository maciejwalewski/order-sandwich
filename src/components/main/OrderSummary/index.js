import { connect } from 'react-redux';

import OrderSummary from './OrderSummary';

const mapStateToProps = state => {
  return {
    sandwichDetails: state.sandwiches.sandwichDetails
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderSummary);
