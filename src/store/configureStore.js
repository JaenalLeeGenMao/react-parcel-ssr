import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import { name, version } from '../../package.json';

import rootReducer from './reducers';

const __DEV__ =
  process.env.REACT_APP_ENV !== 'production' ||
  process.env.NODE_ENV !== 'production';

const configureStore = initialState => {
  const middlewares = [thunk];

  let enhancer;

  if (__DEV__ && typeof window !== 'undefined') {
    middlewares.push(logger);

    const composeEnhancers = composeWithDevTools({
      name: `${name}@${version}`
    });

    enhancer = composeEnhancers(applyMiddleware(...middlewares));
  } else {
    enhancer = applyMiddleware(...middlewares);
  }

  const store = createStore(rootReducer, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('./reducers', () =>
      // eslint-disable-next-line global-require
      store.replaceReducer(require('./reducers').default)
    );
  }

  return store;
};

export default configureStore;
