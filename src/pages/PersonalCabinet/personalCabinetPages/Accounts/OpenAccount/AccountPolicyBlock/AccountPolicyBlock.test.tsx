import React from "react";
import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import { Formik } from "formik";

import { BrowserRouter } from "react-router-dom";

import { AccountPolicyBlock } from ".";
import { localeContent } from "../../../../../../translation/languages";

describe("Account policy block en-us", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <IntlProvider
          locale="en-us"
          defaultLocale="en"
          messages={localeContent["en-us"]}
        >
          <Formik
            initialValues={{
              isConfirm: true,
            }}
            onSubmit={onSubmit}
          >
            <AccountPolicyBlock isConfirm="isConfirm" />
          </Formik>
        </IntlProvider>
      </BrowserRouter>
    );
  });

  it("Rendered account policy confirm", () => {
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument;
    expect(checkbox).toHaveAttribute("name", "isConfirm");
    expect(checkbox).not.toHaveClass("policy__checked");
    expect(checkbox).toHaveClass("policy__unchecked");
  });

  it("Rendered account policy didn't confirm", () => {
    const { container } = render(
      <BrowserRouter>
        <IntlProvider
          locale="en-us"
          defaultLocale="en"
          messages={localeContent["en-us"]}
        >
          <Formik
            initialValues={{
              isPolicy: false,
            }}
            onSubmit={onSubmit}
          >
            <AccountPolicyBlock isConfirm="isConfirm" />
          </Formik>
        </IntlProvider>
      </BrowserRouter>
    );
    const checkbox = container.querySelector("input");

    expect(checkbox).toBeInTheDocument;
    expect(checkbox).toHaveAttribute("name", "isConfirm");
    expect(checkbox).toHaveAttribute("type", "checkbox");
    expect(checkbox).toHaveClass("policy__checked");
    expect(checkbox).not.toHaveClass("policy__unchecked");
  });

  it("Rendered account policy text", () => {
    const policyText = screen.getByText("I agree with the");

    expect(policyText).toBeInTheDocument;
  });

  it("Rendered only one account policy link", () => {
    const policyLink = screen.getAllByRole(/link/);

    expect(policyLink).toHaveLength(1);
  });

  it("Rendered account policy link", () => {
    const policyLink = screen.getByRole(/link/);

    expect(policyLink).toBeInTheDocument;
    expect(policyLink).toHaveTextContent("Terms and conditions");
    expect(policyLink).toHaveClass("policy__link");
  });

  it("Rendered Error block", () => {
    const { container } = render(
      <BrowserRouter>
        <IntlProvider
          locale="en-us"
          defaultLocale="en"
          messages={localeContent["en-us"]}
        >
          <Formik
            initialValues={{
              isPolicy: true,
            }}
            onSubmit={onSubmit}
          >
            <AccountPolicyBlock isConfirm="isConfirm" />
          </Formik>
        </IntlProvider>
      </BrowserRouter>
    );
    const errorBlock = container.querySelector(".policy__error");

    expect(errorBlock).toBeInTheDocument;
    expect(errorBlock).not.toHaveClass("policy__error_active");
    expect(errorBlock).toHaveTextContent(
      "You must agree with Terms and Conditions"
    );
  });
});

describe("Account policy block de-de", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    render(
      <BrowserRouter>
        <IntlProvider
          locale="de-de"
          defaultLocale="de"
          messages={localeContent["de-de"]}
        >
          <Formik
            initialValues={{
              isPolicy: false,
            }}
            onSubmit={onSubmit}
          >
            <AccountPolicyBlock isConfirm="isConfirm" />
          </Formik>
        </IntlProvider>
      </BrowserRouter>
    );
  });

  it("Rendered account policy input:checkbox", () => {
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument;
    expect(checkbox).toHaveAttribute("name", "isConfirm");
    expect(checkbox).toHaveClass("policy__checked");
    expect(checkbox).not.toHaveClass("policy__unchecked");
  });

  it("Rendered account policy text", () => {
    const policyText = screen.getByText("Ich stimme dem zu");

    expect(policyText).toBeInTheDocument;
  });

  it("Rendered only one account policy link", () => {
    const policyLink = screen.getAllByRole(/link/);

    expect(policyLink).toHaveLength(1);
  });

  it("Rendered account policy link", () => {
    const policyLink = screen.getByRole(/link/);

    expect(policyLink).toBeInTheDocument;
    expect(policyLink).toHaveTextContent("Allgemeine Geschäftsbedingungen");
    expect(policyLink).toHaveClass("policy__link");
  });

  it("Rendered Error block", () => {
    const { container } = render(
      <BrowserRouter>
        <IntlProvider
          locale="de-de"
          defaultLocale="de"
          messages={localeContent["de-de"]}
        >
          <Formik
            initialValues={{
              isPolicy: true,
            }}
            onSubmit={onSubmit}
          >
            <AccountPolicyBlock isConfirm="isConfirm" />
          </Formik>
        </IntlProvider>
      </BrowserRouter>
    );
    const errorBlock = container.querySelector(".policy__error");

    expect(errorBlock).toBeInTheDocument;
    expect(errorBlock).not.toHaveClass("policy__error_active");
    expect(errorBlock).toHaveTextContent(
      "Sie müssen den Allgemeinen Geschäftsbedingungen zustimmen"
    );
  });
});
