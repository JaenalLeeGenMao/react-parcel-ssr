import _get from 'lodash/get';
import types from '~/store/types';
import Api from '~/api';

import { getCache, setCache, getKeys } from '~/lib/cache';

export const getHeaderMenu = ({ isSSR = false }) => async dispatch => {
  const key = 'headerMenu';

  let data = getCache(key);
  if (!data) {
    data = await Api.getHeaderMenu({ isSSR });
    setCache(key, data);
  }

  if (data && data.length > 0) {
    dispatch({
      type: types.GET_HEADER_MENU_SUCCESS,
      payload: data
    });
  } else {
    dispatch({
      type: types.GET_HEADER_MENU_ERROR,
      payload: []
    });
  }

  return data;
};
