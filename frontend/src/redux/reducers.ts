import { combineReducers } from 'redux';

import theme from 'modules/theme/theme.slice';
import user from 'auth/user.slice';
import form from 'components/form/form.slice';

export default combineReducers({ form, theme, user });
