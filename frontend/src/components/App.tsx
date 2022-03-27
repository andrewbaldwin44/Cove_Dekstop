import { useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import GlobalStyles from 'styles/GlobalStyles';
import PageRouter from 'pages/page-router';
import { themeActions } from 'modules/theme/theme.slice';
import { isContainingData } from 'utils';
import { themes } from 'styles/config/themes';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <PageRouter />
    </>
  );
}
