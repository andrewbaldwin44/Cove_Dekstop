import { configureStore as createStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import reducer from 'redux/reducers';
import rootSaga from 'redux/sagas';
import rootActions from 'redux/actions.root';

const DEV = process.env.DEV;

const sagaMiddleware = createSagaMiddleware();

const skipSagaActionsMiddleware = () => next => action => {
  if (action.shouldNotUpdateStore) {
    return {};
  }

  return next(action);
};

const middleware = [
  ...getDefaultMiddleware({ thunk: false }),
  sagaMiddleware,
  skipSagaActionsMiddleware,
];

const store = createStore({
  reducer,
  devTools: DEV,
  middleware,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default function configureStore() {
  sagaMiddleware.run(rootSaga);

  store.dispatch(rootActions.initialLoad());

  return store;
}
