import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { updateStateWithPayload } from 'redux/utils';

interface IErrorPayload {
  errorMessage: string;
}

interface IFormState {
  isSubmitted: boolean;
  success: boolean;
  errorMessage: string | null;
}

const initialState: IFormState = {
  isSubmitted: false,
  success: false,
  errorMessage: null,
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    submitted: state => ({ ...state, isSubmitted: true, success: false, errorMessage: null }),
    success: () => ({ ...initialState, success: true }),
    error: (state, payload: PayloadAction<IErrorPayload>) => ({
      ...state,
      ...payload,
      isSubmitted: false,
    }),
  },
});

export const formActions = formSlice.actions;

export default formSlice.reducer;
