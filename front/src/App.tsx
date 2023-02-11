import React from "react";

import { Provider as ReduxProvider } from "react-redux";

import { PageRenderer } from "./pages/PageRenderer";

import { Provider } from "./translation";

import { store } from "./redux/store/store";

export const App = () => (
  <ReduxProvider store={store}>
    <Provider>
      <PageRenderer />
    </Provider>
  </ReduxProvider>
);
