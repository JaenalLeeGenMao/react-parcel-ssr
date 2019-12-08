import NodeCache from 'node-cache';

const cache = new NodeCache();

const TIMEOUT = 300;

/**
 * Returns a **undefined** if not found or expired. If the value was found it returns an **object** with the key value pair.
 * @param key is a UNIQUE identifier of string value
 */
export const getCache = key => {
  return cache.get(key);
};

/**
 * Returns **FALSE** if value is empty, **FALSE** if failed to store in cache and **TRUE** if value is successfully stored in cache
 * @param key Must be UNIQUE string value
 * @param value only accepts value of object or string
 */
export const setCache = (key, value) => {
  if (!value) return false;
  return cache.set(key, value, TIMEOUT);
};

/**
 * This method is used to tracked all existing keys stored in cache
 */
export const getKeys = () => {
  return cache.keys();
};
