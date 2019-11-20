import { combineReducers } from "redux";

import example from "./example";
import home from "./home";

const reducers = {
  example,
  home
};

export default combineReducers(reducers);
