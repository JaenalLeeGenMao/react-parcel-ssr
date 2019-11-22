import types from "~/store/types";

const initialState = {
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HOME_ERROR:
      return {
        ...state,
        ...action.payload
      };
    case types.GET_HOME_EMPTY:
      return {
        ...state,
        ...action.payload
      };
    case types.GET_HOME_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
