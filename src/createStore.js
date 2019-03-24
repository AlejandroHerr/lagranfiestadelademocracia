import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const getEnv = () => process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development';

const isDevelopmentEnv = () => getEnv() === 'development';

export default () => {
  // eslint-disable-next-line no-underscore-dangle
  const composeEnhancers = isDevelopmentEnv() ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose;

  const middlewares = [thunk];

  const enhancer = composeEnhancers(applyMiddleware(...middlewares));

  return createStore(rootReducer, enhancer);
};
