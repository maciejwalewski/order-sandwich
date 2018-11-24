import React, { Component } from "react";

class BreadStage extends Component {
  constructor() {
    super();

    this.state = {
      visible: true,
      chosenBread: 0
    };

    this.handleBread = this.handleBread.bind(this);
  }

  componentDidMount() {
    const { currentStage } = this.props;

    this.setState({
      visible: false
    });

    if (currentStage === 1) {
      setTimeout(() => {
        this.setState({ visible: true });
      }, 50);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentStage === 1) {
      setTimeout(() => {
        this.setState({
          visible: true
        });
      }, 50);
    } else {
      this.setState({
        visible: false
      });
    }
  }

  handleBread(event) {
    const { setBread } = this.props;

    setBread(event.target.value);
  }

  render() {
    const { visible } = this.state;

    console.log(this.props.currentStage);

    return (
      <section className={visible ? "stage" : "stage stage--hidden"}>
        <div className="stage__choice">
          <input
            type="radio"
            name="bread"
            id="bread1"
            className="stage__input"
            value="bread1"
            onChange={event => this.handleBread(event)}
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
            value="bread2"
            onChange={event => this.handleBread(event)}
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
