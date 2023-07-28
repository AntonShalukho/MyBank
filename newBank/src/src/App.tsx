import React from "react";

import { Provider as ReduxProvider } from "react-redux";

import { Router } from "src/pages/Router";

import { SpinnerProvider } from "src/features/SpinnerProvider";

import { store } from "src/shared/model/redux/store/store";

import { Provider } from "src/shared/assets/translation";

export const App = () => (
  <ReduxProvider store={store}>
    <Provider>
      <SpinnerProvider>
        <Router />
      </SpinnerProvider>
    </Provider>
  </ReduxProvider>
);
