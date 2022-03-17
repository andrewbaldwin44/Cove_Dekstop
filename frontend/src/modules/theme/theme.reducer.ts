import { themes } from 'styles/config/themes';
import { THEME, IThemeAction } from 'modules/theme/theme.actions';

const initialState = {
  colors: themes.default.colors,
};

export default function themeReducer(state = initialState, { type, payload }: IThemeAction) {
  switch (type) {
    case THEME.CHANGE_THEME:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
}
