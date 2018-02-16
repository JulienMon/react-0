import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

const restaurantApp = combineReducers({
  counterState: counterReducer
});

export default restaurantApp;
