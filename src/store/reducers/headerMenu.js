import types from '~/store/types';

const initialState = {
  meta: {
    status: 'loading'
  },
  data: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_HEADER_MENU_ERROR:
      return { ...action.payload };
    case types.GET_HEADER_MENU_SUCCESS:
      return { ...action.payload };
    case types.GET_HEADER_MENU_EMPTY:
      return { ...action.payload };
    default:
      return { ...state };
  }
};
