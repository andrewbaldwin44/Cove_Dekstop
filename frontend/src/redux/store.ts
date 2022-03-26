import { createStore } from 'redux';

import reducer, { IState } from 'redux/reducers';

export default function configureStore(initialState?: IState) {
  const store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  );

  return store;
}
