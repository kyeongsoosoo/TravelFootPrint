import React, { Suspense } from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { ThemeProvider } from "styled-components";
import App from "./App";
import Loading from "./Component/Loading/Loading";
import { GlobalStyle } from "./lib/css/GlobalStyled";
import theme from "./lib/css/Theme";

import { rootReducer } from "./redux";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Suspense fallback={Loading}>
          <App />
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
);
