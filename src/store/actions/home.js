import _get from "lodash/get";
import _fetch from "~/utils/_fetch";
import types from "~/store/types";

export const getHomeData = () => async dispatch => {
  const data = await fetch("https://mola.tv/api/v2/videos/playlists/home-new")
    .then(res => res.json())
    .then(data => {
      const playlists = _get(data, "data", []);
      if (playlists.length > 0) {
        dispatch({
          type: types.GET_HOME_SUCCESS,
          payload: { data: playlists[0] }
        });
        return playlists[0];
      }

      dispatch({
        type: types.GET_HOME_EMPTY,
        payload: { data: [] }
      });
      return [];
    })
    .catch(err => {
      dispatch({
        type: types.GET_HOME_ERROR,
        payload: { data: err }
      });
      return console.log("Error happened:", err);
    });

  return data;
};
