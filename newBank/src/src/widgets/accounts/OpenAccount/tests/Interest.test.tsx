import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { Formik } from "formik";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { withProviders } from "src/shared/lib/test-utils";

import { Interest } from "../components/Interest";

describe("Account Interest block en-us", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    withProviders(
      <Formik
        initialValues={{
          interest: "11",
        }}
        onSubmit={onSubmit}
      >
        <Interest interest="interest" />
      </Formik>
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
    withProviders(
      <Formik
        initialValues={{
          interest: "11",
        }}
        onSubmit={onSubmit}
      >
        <Interest interest="interest" />
      </Formik>
    );
  });

  it("Is rendered text ", () => {
    const interest = screen.getByText(widgetEn.widget_interestRate);

    expect(interest).toBeInTheDocument;
    expect(interest).toHaveClass("account_name__title");
  });

  it("Get snapshot", () => {
    const { container } = withProviders(
      <Formik
        initialValues={{
          interest: "11",
        }}
        onSubmit={onSubmit}
      >
        <Interest interest="interest" />
      </Formik>
    );

    expect(container).toMatchSnapshot();
  });
});
