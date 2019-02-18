import React, { Component } from "react";

import { BreadStage, ButterStage, StageButtons } from "@/components/stages";

class AllStages extends Component {
  render() {
    const { unmountingOrder } = this.props;

    return (
      <section
        className={
          unmountingOrder ? "all-stages all-stages--hidden" : "all-stages"
        }
      >
        <BreadStage />
        <ButterStage />
        <StageButtons />
      </section>
    );
  }
}

export default AllStages;
