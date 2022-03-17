import { createActionTypes, action } from '../../utils/actions';
import { IThemeColors } from '../../styles/config/themes';

export const THEME = createActionTypes('THEME', ['CHANGE_THEME']);

interface IChangeThemePayload {
  colors: IThemeColors;
}

export interface IThemeAction {
  type: typeof THEME[keyof typeof THEME];
  payload: IChangeThemePayload;
}

export const themeActions = {
  changeTheme: (payload: IChangeThemePayload) => action(THEME.CHANGE_THEME, payload),
};
