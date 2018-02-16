import React from "react";
import * as counterActions from "./counterActions";
import { connect } from "react-redux";

function CounterController({ dispatch }) {
  return (
    <h2>
      <button onClick={() => dispatch(counterActions.decrementCounter())}>
        -
      </button>
      <button onClick={() => dispatch(counterActions.reset())}>reset</button>
      <button onClick={() => dispatch(counterActions.incrementCounter())}>
        +
      </button>
    </h2>
  );
}

function mapStateToProp(applicationState) {
  return applicationState;
}

const ConnectedCounterController = connect(mapStateToProp)(CounterController);

export default ConnectedCounterController;
