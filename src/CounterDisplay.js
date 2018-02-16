import React from "react";
import { connect } from "react-redux";

function CounterDisplay({ currentCounter }) {
  return <h2>{currentCounter}</h2>;
}

function mapStateToProp({ counterState }) {
  return {
    currentCounter: counterState.currentCounter
  };
}

const ConnectedCounterDisplay = connect(mapStateToProp)(CounterDisplay);

export default ConnectedCounterDisplay;
