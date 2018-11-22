import React, { Component } from "react";

import NewOrder from "./NewOrder";
import AllStages from "./AllStages";

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      orderStarted: false,
      sendOrderStartedDelay: false
    };

    this._startOrder = this._startOrder.bind(this);
    this._endOrder = this._endOrder.bind(this);
  }

  _startOrder() {
    let that = this;
    this.setState(
      prevState => ({
        sendOrderStartedDelay: !prevState.sendOrderStartedDelay
      }),
      function() {
        setTimeout(() => {
          that.setState(prevState => ({
            orderStarted: !prevState.orderStarted
          }));
        }, 1000);
      }
    );
  }

  _endOrder() {
    let that = this;
    this.setState(
      prevState => ({
        orderStarted: !prevState.orderStarted
      }),
      function() {
        setTimeout(() => {
          that.setState(prevState => ({
            sendOrderStartedDelay: !prevState.sendOrderStartedDelay
          }));
        }, 1000);
      }
    );
  }

  render() {
    const { sendOrderStartedDelay, orderStarted } = this.state;

    return (
      <main>
        {orderStarted ? (
          <AllStages />
        ) : (
          <NewOrder
            startOrder={this._startOrder}
            orderStartedDelay={sendOrderStartedDelay}
          />
        )}
        <button onClick={this._endOrder}>helllo</button>
      </main>
    );
  }
}

export default MainPage;
