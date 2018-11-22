import React, { Component } from "react";

import BreadStage from "@/components/stages/BreadStage";

class AllStages extends Component {
  constructor() {
    super();

    this.state = {
      currentStage: 0
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        currentStage: 1,
      })
    }, 50);
  }

  render() {
    const { currentStage } = this.state;

    const { unmountingOrder } = this.props;

    return (
      <section className={unmountingOrder ? "all-stages all-stages--hidden" : "allStages" }>
        <BreadStage currentStage={currentStage} />
      </section>
    );
  }
}

export default AllStages;
