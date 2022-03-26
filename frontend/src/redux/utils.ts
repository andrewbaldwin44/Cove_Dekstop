import { useCallback } from 'react';
import { PayloadAction } from '@reduxjs/toolkit';

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
