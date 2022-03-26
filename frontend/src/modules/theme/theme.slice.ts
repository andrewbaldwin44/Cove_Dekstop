import { createSlice } from '@reduxjs/toolkit';

import { themes, IThemeColors } from 'styles/config/themes';
import { updateStateWithPayload } from 'redux/utils';

interface IThemeState {
  colors: IThemeColors;
}

const initialState: IThemeState = {
  colors: themes.default.colors,
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    changeTheme: updateStateWithPayload<IThemeState>(),
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
