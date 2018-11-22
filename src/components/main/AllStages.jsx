import React, { Component } from "react";

import BreadStage from '@/components/stages/BreadStage';

class AllStages extends Component {
  constructor() {
    super();

    this.state = {
      currentStage: 1,
    }
  }

  render() {

    return (
      <section className="all-stages">
        <BreadStage />
      </section>
    );
  }
}

export default AllStages;
