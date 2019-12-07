import types from '../types';

export default function runtime(state = {}, action) {
  switch (action.type) {
    case types.SET_RUNTIME_VARIABLE:
      console.log(action);
      return {
        ...state,
        [action.payload.name]: action.payload.value
      };
    default:
      return { ...state };
  }
}
