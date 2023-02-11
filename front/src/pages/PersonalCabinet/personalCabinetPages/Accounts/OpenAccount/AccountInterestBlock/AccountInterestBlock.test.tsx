import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { IntlProvider } from "react-intl";

import { Formik } from "formik";

import { localeContent } from "../../../../../../translation/languages";
import { AccountInterestBlock } from ".";

describe("Account Interest block en-us", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    render(
      <IntlProvider
        locale="en-us"
        defaultLocale="en"
        messages={localeContent["en-us"]}
      >
        <Formik
          initialValues={{
            interest: "11",
          }}
          onSubmit={onSubmit}
        >
          <AccountInterestBlock interest="interest" />
        </Formik>
      </IntlProvider>
    );
  });

  it("Is rendered text 'Interest Rate' ", () => {
    const interest = screen.getByText("Interest Rate");

    expect(interest).toBeInTheDocument;
    expect(interest).toHaveTextContent("Interest Rate");
    expect(interest).toHaveClass("account_name__title");
  });

  it("Is rendered value", () => {
    const accountInput = screen.getByText(/11%/i);

    expect(accountInput).toBeInTheDocument;
    expect(accountInput).toHaveTextContent(/11%/);
    expect(accountInput).toHaveClass("account_name__input");
  });
});

describe("Account interest block de", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    render(
      <IntlProvider
        locale="de-de"
        defaultLocale="de"
        messages={localeContent["de-de"]}
      >
        <Formik
          initialValues={{
            interest: "11",
          }}
          onSubmit={onSubmit}
        >
          <AccountInterestBlock interest="interest" />
        </Formik>
      </IntlProvider>
    );
  });

  it("Is rendered text 'Zinssatz' ", () => {
    const interest = screen.getByText("Zinssatz");

    expect(interest).toBeInTheDocument;
    expect(interest).toHaveTextContent("Zinssatz");
    expect(interest).toHaveClass("account_name__title");
  });
});
