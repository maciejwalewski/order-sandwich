import React, { Component } from "react";

import { BreadStage } from "@/components/stages/BreadStage";
import { ButterStage } from "@/components/stages/ButterStage";
import { StageButtons } from "@/components/stages/StageButtons";

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
