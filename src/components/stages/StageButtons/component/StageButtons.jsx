import React, { Component } from "react";

class StageButtons extends Component {
  constructor() {
    super();

    this.state = {
      currentStage: 0
    };

    this.changeStage = this.changeStage.bind(this);
  }

  componentWillReceiveProps(nextProps) {}

  changeStage(val) {
    const { setStage } = this.props;
    setStage(val);
  }

  render() {
    return (
      <nav className="stages-nav">
        <button className="stages-nav__btn" onClick={() => this.changeStage(-1)}>Prev</button>
        <button className="stages-nav__btn" onClick={() => this.changeStage(1)}>Next</button>
      </nav>
    );
  }
}

export default StageButtons;
