import React, { Component } from 'react';

class NewOrder extends Component {
  constructor() {
    super();

    this.state = {
      animationStart: false
    };
  }

  componentDidMount() {
    let that = this;
    this.setState(
      {
        animationStart: true
      },
      () => {
        setTimeout(() => {
          that.setState({
            animationStart: false
          });
        }, 500);
      }
    );
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      animationStart: nextProps.orderStarted
    });
  }

  render() {
    const { startOrder } = this.props;
    const { animationStart } = this.state;
    return (
      <section className={animationStart ? 'create-new create-new--hidden' : 'create-new'}>
        <h2 className="create-new__header">Click the button below to make an order!</h2>
        <button className="create-new__button" onClick={startOrder}>
          Create Sandwich
        </button>
      </section>
    );
  }
}

export default NewOrder;
