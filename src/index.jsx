import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import App from './components/';
import theme from './static/tailwind.config';
import configureStore from './reducer/configureStore';
import * as serviceWorker from './serviceWorker';
import {GlobalStyle} from './style';


const store= configureStore();

render(
  <Provider store={store}>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App theme={theme}/>
    </ThemeProvider>
  </Provider>,
  document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
