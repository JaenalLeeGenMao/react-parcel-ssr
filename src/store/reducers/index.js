import { combineReducers } from 'redux';

import runtime from './runtime';
import example from './example';
import headerMenu from './headerMenu';

const reducers = {
  runtime,
  example,
  headerMenu
};

export default combineReducers(reducers);
