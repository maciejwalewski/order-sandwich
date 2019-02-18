import React, { Component } from 'react';

class ButterStage extends Component {
  constructor() {
    super();

    this.state = {
      visible: true,
      chosenBread: 0
    };

    this.handleButter = this.handleButter.bind(this);
  }

  componentDidMount() {
    this.setState({
      visible: false
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currentStage === 2) {
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

  handleButter(event) {
    const { setButter } = this.props;

    setButter(event.target.value);
  }

  render() {
    const { visible } = this.state;

    return (
      <section className={ visible ? 'stage' : 'stage stage--hidden' }>
        <div className="stage__choice">
          <input
            type="radio"
            name="butter"
            id="butter1"
            className="stage__input"
            value={ true }
            onChange={ event => this.handleButter(event) }
          />
          <label className="stage__label" htmlFor="butter1">
            Yes, please
            {/* <img src={monster.images.thumb} alt={monster.name} /> */}
          </label>
        </div>
        <div className="stage__choice">
          <input
            type="radio"
            name="butter"
            id="butter2"
            className="stage__input"
            value={ false }
            onChange={ event => this.handleButter(event) }
          />
          <label className="stage__label" htmlFor="butter2">
            No, thank You
            {/* <img src={monster.images.thumb} alt={monster.name} /> */}
          </label>
        </div>
      </section>
    );
  }
}

export default ButterStage;
