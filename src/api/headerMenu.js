import _get from "lodash/get";
import { get } from "axios";

import { HEADER_MENU_ENDPOINT, HEADER_MENU_ENDPOINT_SSR } from "./endpoints";

const SETTING = {
  timeout: 10000,
  maxRedirects: 1
};

const getHeaderMenu = ({ isSSR }) => {
  const url = isSSR ? HEADER_MENU_ENDPOINT_SSR : HEADER_MENU_ENDPOINT;

  return get(url, {
    ...SETTING
  })
    .then(resp => {
      const result = _get(resp, "data.data", []);
      return {
        meta: {
          status: result.length > 0 ? "success" : "empty"
        },
        data: result
      };
    })
    .catch(err => {
      console.log("ERROR [getHeaderMenu] --> \n", err);
      return {
        meta: {
          status: "error"
        },
        data: []
      };
    });
};

export { getHeaderMenu };
