import { combineReducers } from 'redux';

import theme, { IThemeState } from 'modules/theme/theme.reducer';

export interface IState extends IThemeState {}

export default combineReducers({ theme });
