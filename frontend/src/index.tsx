import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import AuthenticationProvider from 'components/AuthenticationContext';
import App from 'components/App';

import store from 'redux/store';

render(
  <StrictMode>
    <AuthenticationProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthenticationProvider>
  </StrictMode>,
  document.getElementById('root'),
);
