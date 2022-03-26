import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import GlobalStyles from 'styles/GlobalStyles';
import PageRouter from 'pages/page-router';
import { AuthenticationContext } from 'components/AuthenticationContext';
import { themeActions } from 'modules/theme/theme.actions';
import { isContainingData } from 'utils';
import { themes } from 'styles/config/themes';

export default function App() {
  const { userData } = useContext(AuthenticationContext);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isContainingData(userData)) {
      const { selectedTheme } = userData;
      const themeColors = themes[selectedTheme].colors;

      if (selectedTheme !== 'default') dispatch(themeActions.changeTheme({ colors: themeColors }));
    }
    // eslint-disable-next-line
  }, [userData]);

  return (
    <>
      <GlobalStyles />
      <PageRouter />
    </>
  );
}
