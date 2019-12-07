/* eslint-disable import/prefer-default-export */
import dotenv from 'dotenv';
dotenv.config();

import initConfig from '../../config';

const ENV = process.env.NODE_ENV || 'production';

const { endpoints } = initConfig(ENV);

/** Client side endpoints */
export const HEADER_MENU_ENDPOINT = `${endpoints.domain}/api/v2/config/ui/menu`;

/** Server side endpoints */
export const HEADER_MENU_ENDPOINT_SSR = `${endpoints.serverApi.CONFIG_API_URL}/ui/menu?app_id=${endpoints.serverApi.appId}`;
