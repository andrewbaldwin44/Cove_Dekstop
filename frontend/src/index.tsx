import { StrictMode } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from 'components/App';
import configureStore from 'redux/store';

const store = configureStore();

render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root'),
);
