import React, { PropsWithChildren } from "react";

import "@testing-library/jest-dom";

import { IntlProvider } from "react-intl";

import { Provider } from "react-redux";

import { render } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import { AppStore, setupStore } from "../redux/store/store";

import { localeContent } from "../translation/languages";

type ExtendedRenderOptionsType = {
  preloadedState?: Record<string, unknown>;
  store?: AppStore;
};

export function withProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptionsType = {}
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

export function withProvidersDe(
  ui: React.ReactElement,
  {
    preloadedState = {},
    store = setupStore(preloadedState),
    ...renderOptions
  }: ExtendedRenderOptionsType = {}
) {
  function Wrapper({ children }: PropsWithChildren<unknown>): JSX.Element {
    return (
      <BrowserRouter>
        <IntlProvider
          locale="de-de"
          defaultLocale="de"
          messages={localeContent["de-de"]}
        >
          <Provider store={store}>{children}</Provider>
        </IntlProvider>
      </BrowserRouter>
    );
  }
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
