import { connect } from "react-redux";

import ButterStage from "./ButterStage";

const mapStateToProps = state => {
  return {
    currentStage: state.currentStage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setButter: butter => {
      dispatch({
        type: "SET_BUTTER",
        payload: butter
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ButterStage);
