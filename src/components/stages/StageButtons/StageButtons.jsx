import React, { Component } from "react";

class StageButtons extends Component {
  constructor() {
    super();

    this.state = {
      minStep: 1,
      maxStep: 3
    };

    this.changeStage = this.changeStage.bind(this);
  }

  changeStage(bool) {
    const { setStage, currentStage } = this.props;
    const { minStep, maxStep } = this.state;

    if (bool && currentStage < maxStep) {
      setStage(1);
    } else if (!bool && currentStage > minStep) {
      setStage(-1);
    }
  }

  render() {
    const { currentStage } = this.props;
    const { minStep, maxStep } = this.state;

    return (
      <nav className="stages-nav">
        {currentStage !== minStep && (
          <button
            className="stages-nav__btn"
            onClick={() => this.changeStage(false)}
          >
            Prev
          </button>
        )}
        {currentStage !== maxStep && (
          <button
            className="stages-nav__btn"
            onClick={() => this.changeStage(true)}
          >
            Next
          </button>
        )}
      </nav>
    );
  }
}

export default StageButtons;
