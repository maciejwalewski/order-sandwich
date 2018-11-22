import React, { Component } from "react";

class BreadStage extends Component {
  constructor() {
    super();

    this.state = {
      currentStage: 1
    };
  }

  render() {
    return (
      <section className="stage">
        <div className="stage__choice">
          <input
            type="radio"
            name="bread"
            id="bread1"
            className="stage__input"
          />
          <label className="stage__label" htmlFor="bread1">
            BREAD 1{/* <img src={monster.images.thumb} alt={monster.name} /> */}
          </label>
        </div>
        <div className="stage__choice">
          <input
            type="radio"
            name="bread"
            id="bread2"
            className="stage__input"
          />
          <label className="stage__label" htmlFor="bread2">
            BREAD 2{/* <img src={monster.images.thumb} alt={monster.name} /> */}
          </label>
        </div>
      </section>
    );
  }
}

export default BreadStage;
