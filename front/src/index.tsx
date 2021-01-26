import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { GlobalStyle } from './lib/css/GlobalStyled';
import theme from './lib/css/theme';

render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root'),
);
