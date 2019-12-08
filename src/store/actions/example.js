import _get from 'lodash/get';
import types from '~/store/types';

import Api from '~/api';

import { getCache, setCache, getKeys } from '~/lib/cache';

export const getExampleData = ({ isSSR = false }) => async dispatch => {
  const key = 'exampleData';

  let result = getCache(key);

  if (!result) {
    result = await Api.getExampleData({ isSSR });
    setCache(key, result);
  }

  if (result.meta.status === 'error') {
    dispatch({
      type: types.GET_EXAMPLE_ERROR,
      payload: result
    });
  } else {
    dispatch({
      type:
        result.meta.status === 'success'
          ? types.GET_EXAMPLE_SUCCESS
          : types.GET_EXAMPLE_EMPTY,
      payload: result
    });
  }

  return result;
};
