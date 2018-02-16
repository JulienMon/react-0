import * as counterActions from "./counterActions";

const defaultState = {
  currentCounter: 0
};

const counterReducer = (previousState = defaultState, action) => {
  const { currentCounter } = previousState;

  switch (action.type) {
    case counterActions.INCREMENT:
      return {
        currentCounter: currentCounter + action.payload.changeNumber
      };

    case counterActions.DECREMENT:
      return {
        currentCounter: currentCounter - action.payload.changeNumber
      };

    case counterActions.RESET:
      return {
        currentCounter: action.payload.changeNumber
      };
    default:
      return previousState;
  }
};

export default counterReducer;
