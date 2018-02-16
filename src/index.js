import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

import { createStore } from "redux";
import { Provider } from "react-redux";
import restaurantApp from "./restaurantApp";

const initialStore = {
  counterState: {
    currentCounter: 6
  }
};

const currentStore = createStore(restaurantApp, initialStore);

ReactDOM.render(
  <Provider store={currentStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
