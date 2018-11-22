import React, { Component } from "react";

import NewOrder from "./NewOrder";
import AllStages from "./AllStages";

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      orderStarted: false,
      sendOrderStartedDelay: false,
      unmountingOrder: false
    };

    this._startOrder = this._startOrder.bind(this);
    this._endOrder = this._endOrder.bind(this);
  }

  _startOrder() {
    this.setState({
      unmountingOrder: false
    });

    let that = this;
    this.setState(
      prevState => ({
        sendOrderStartedDelay: !prevState.sendOrderStartedDelay
      }),
      () => {
        setTimeout(() => {
          that.setState(prevState => ({
            orderStarted: !prevState.orderStarted
          }));
        }, 400);
      }
    );
  }

  _endOrder() {
    this.setState({
      unmountingOrder: true
    });

    let that = this;

    setTimeout(() => {
      this.setState(
        prevState => ({
          orderStarted: !prevState.orderStarted
        }),
        () => {
          setTimeout(() => {
            that.setState(prevState => ({
              sendOrderStartedDelay: !prevState.sendOrderStartedDelay
            }));
          }, 30);
        }
      );
    }, 270);
  }

  render() {
    const { sendOrderStartedDelay, orderStarted, unmountingOrder } = this.state;

    return (
      <main>
        {orderStarted ? (
          <AllStages unmountingOrder={unmountingOrder} />
        ) : (
          <NewOrder
            startOrder={this._startOrder}
            orderStarted={sendOrderStartedDelay}
          />
        )}
        <button onClick={this._endOrder}>helllo</button>
      </main>
    );
  }
}

export default MainPage;
