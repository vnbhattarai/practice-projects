import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

// import { promiseMiddleware, localStorageMiddleware } from './middleware';

const createStoreWithMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunk);
    //return applyMiddleware(thunk,promiseMiddleware, localStorageMiddleware); If used other middlewares
  } else {
    // Additional logging during development.
    return applyMiddleware(
      promiseMiddleware,
      localStorageMiddleware,
      createLogger(),
    );
  }
};

const store = createStore(
  rootReducer,
  compose(
    createStoreWithMiddleware(),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
