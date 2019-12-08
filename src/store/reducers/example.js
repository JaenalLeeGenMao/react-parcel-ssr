import types from '~/store/types';

const initialState = {
  meta: {
    status: 'loading'
  },
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_EXAMPLE_ERROR:
      return {
        ...state,
        ...action.payload
      };
    case types.GET_EXAMPLE_EMPTY:
      return {
        ...state,
        ...action.payload
      };
    case types.GET_EXAMPLE_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return { ...state };
  }
};
