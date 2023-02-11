import React, { PropsWithChildren } from "react";

import "@testing-library/jest-dom";

import { IntlProvider } from "react-intl";

import { Provider } from "react-redux";

import { render, RenderOptions } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import { AppStore, setupStore } from "../redux/store/store";

import { localeContent } from "../translation/languages";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: Record<string, unknown>;
  store?: AppStore;
}

export function withProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return (
      <BrowserRouter>
        <IntlProvider
          locale="en-us"
          defaultLocale="en"
          messages={localeContent["en-us"]}
        >
          <Provider store={store}>{children}</Provider>
        </IntlProvider>
      </BrowserRouter>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
