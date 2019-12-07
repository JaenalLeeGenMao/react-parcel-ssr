import NodeCache from "node-cache";

const cache = new NodeCache();

const TIMEOUT = 300;

export const getCache = key => {
  return cache.get(key);
};

export const setCache = (key, value) => {
  if (!value) return false;
  return cache.set(key, value, TIMEOUT);
};

export const getKeys = () => {
  return cache.keys();
};
