import React, { Component } from "react";

import NewOrder from "../elements/NewOrder";
import { AllStages } from "./";

class MainPage extends Component {
  constructor() {
    super();

    this.state = {
      orderStarted: false,
      sendOrderStartedDelay: false,
      unmountingOrder: false
    };

    this.startOrder = this.startOrder.bind(this);
    this.endOrder = this.endOrder.bind(this);
  }

  startOrder() {
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

  endOrder() {
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
            startOrder={this.startOrder}
            orderStarted={sendOrderStartedDelay}
          />
        )}
        <button onClick={this.endOrder}>Back to the main page</button>
      </main>
    );
  }
}

export default MainPage;
