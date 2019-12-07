/* eslint-disable import/prefer-default-export */

import types from '../types';

export const setRuntimeVariable = ({ name, value }) => dispatch => {
  dispatch({
    type: types.SET_RUNTIME_VARIABLE,
    payload: {
      name,
      value
    }
  });
};
