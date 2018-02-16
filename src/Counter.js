import React, { Component } from "react";
import * as counterActions from "./counterActions";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    const { currentCounter } = this.props.counterState;
    const { dispatch } = this.props;

    return (
      <h2>
        <button onClick={() => dispatch(counterActions.decrementCounter())}>
          -
        </button>
        Counter: {currentCounter}
        <button onClick={() => dispatch(counterActions.incrementCounter())}>
          +
        </button>
        <button onClick={() => dispatch(counterActions.reset())}>reset</button>
      </h2>
    );
  }
}

function mapStateToProp(applicationState) {
  return applicationState;
}

const ConnectedCounter = connect(mapStateToProp)(Counter);

export default ConnectedCounter;
