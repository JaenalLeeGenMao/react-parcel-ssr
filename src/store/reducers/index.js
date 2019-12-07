import { combineReducers } from 'redux';

import runtime from './runtime';
import home from './home';
import headerMenu from './headerMenu';

const reducers = {
  runtime,
  home,
  headerMenu
};

export default combineReducers(reducers);
