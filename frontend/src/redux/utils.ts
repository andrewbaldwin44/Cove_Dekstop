import { useCallback } from 'react';
import { createSlice as createReduxSlice, PayloadAction } from '@reduxjs/toolkit';
import { all, takeEvery } from 'redux-saga/effects';

import { useDispatch } from 'redux/hooks';

export function updateStateWithPayload<ActionType>() {
  return (state, { payload }: PayloadAction<ActionType>) => ({ ...state, ...payload });
}

export function useAction(action) {
  const dispatch = useDispatch();

  return useCallback(
    (...args) => {
      dispatch(action(...args));
    },
    [action, dispatch],
  );
}

function createSagaActions(name, sagas) {
  return Object.keys(sagas).reduce(
    (sagaActions, actionType) => ({
      ...sagaActions,
      [actionType]: payload => ({
        type: `${name}/${actionType}`,
        payload,
        shouldNotUpdateStore: true,
      }),
    }),
    {},
  );
}

function createSagaWatcher(name, sagas) {
  const watcherArray = Object.entries(sagas).map(([actionType, saga]) =>
    takeEvery(`${name}/${actionType}`, saga),
  );

  const watcher = function* watchSaga() {
    yield all(watcherArray);
  };

  return watcher;
}

export function createSagaSlice({ sagas, ...slice }) {
  const { name } = slice;

  const reduxSlice = createReduxSlice(slice);

  const sagaActions = createSagaActions(name, sagas);
  const sagaWatcher = createSagaWatcher(name, sagas);

  return {
    ...reduxSlice,
    actions: {
      ...reduxSlice.actions,
      ...sagaActions,
    },
    watcher: sagaWatcher,
  };
}
