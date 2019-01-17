import { connect } from "react-redux";

import StageButtons from "../component/StageButtons";

const mapStateToProps = state => {
  return {
    currentStage: state.currentStage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setStage: stage => {
      dispatch({
        type: "SET_STAGE",
        payload: stage
      });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StageButtons);
