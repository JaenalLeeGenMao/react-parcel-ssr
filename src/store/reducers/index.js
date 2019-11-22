import { combineReducers } from "redux";

import example from "./example";
import runtime from "./runtime";
import home from "./home";

const reducers = {
  example,
  runtime,
  home
};

export default combineReducers(reducers);
