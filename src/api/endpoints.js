/* eslint-disable import/prefer-default-export */

const { LFCTV_BASE_URL, LFCTV_CONFIG_API_URL, LFCTV_APP_ID } = process.env;

/** Client side endpoints */
export const HEADER_MENU_ENDPOINT = `${LFCTV_BASE_URL}/api/v2/config/ui/menu`;

/** Server side endpoints */
export const HEADER_MENU_ENDPOINT_SSR = `${LFCTV_CONFIG_API_URL}/ui/menu?app_id=${LFCTV_APP_ID}`;
