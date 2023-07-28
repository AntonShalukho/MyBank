import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { Formik } from "formik";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { withProviders } from "src/shared/lib/test-utils";

import { Policy } from "../components/Policy";

describe("Account Policy block en-us", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    withProviders(
      <Formik
        initialValues={{
          isConfirm: true,
        }}
        onSubmit={onSubmit}
      >
        <Policy isConfirm="isConfirm" />
      </Formik>
    );
  });

  it("Rendered account policy confirm", () => {
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeInTheDocument;
    expect(checkbox).toHaveAttribute("name", "isConfirm");
    expect(checkbox).toHaveAttribute("type", "checkbox");
    expect(checkbox).not.toHaveClass("policy__checked");
    expect(checkbox).toHaveClass("policy__unchecked");
  });

  it("Rendered account policy didn't confirm", () => {
    const { container } = withProviders(
      <Formik
        initialValues={{
          isConfirm: false,
        }}
        onSubmit={onSubmit}
      >
        <Policy isConfirm="isConfirm" />
      </Formik>
    );

    const checkbox = container.querySelector("input");

    expect(checkbox).toBeInTheDocument;
    expect(checkbox).toHaveAttribute("name", "isConfirm");
    expect(checkbox).toHaveAttribute("type", "checkbox");
    expect(checkbox).toHaveClass("policy__checked");
    expect(checkbox).not.toHaveClass("policy__unchecked");
  });

  it("Rendered account policy text", () => {
    const policyText = screen.getByText(widgetEn.widget_accountAgree);

    expect(policyText).toBeInTheDocument;
  });

  it("Rendered only one account policy link", () => {
    const policyLink = screen.getAllByRole(/link/);

    expect(policyLink).toHaveLength(1);
  });

  it("Rendered account policy link", () => {
    const policyLink = screen.getByRole(/link/);

    expect(policyLink).toBeInTheDocument;
    expect(policyLink).toHaveTextContent(widgetEn.widget_accountAgreeLink);
    expect(policyLink).toHaveClass("policy__link");
  });

  it("Rendered Error block", () => {
    const { container } = withProviders(
      <Formik
        initialValues={{
          isConfirm: true,
        }}
        onSubmit={onSubmit}
      >
        <Policy isConfirm="isConfirm" />
      </Formik>
    );
    const errorBlock = container.querySelector(".policy__error");

    expect(errorBlock).toBeInTheDocument;
    expect(errorBlock).not.toHaveClass("policy__error_active");
    expect(errorBlock).toHaveTextContent(widgetEn.widget_PolicyError);
  });

  it("Get Snapshot", () => {
    const { container } = withProviders(
      <Formik
        initialValues={{
          isConfirm: true,
        }}
        onSubmit={onSubmit}
      >
        <Policy isConfirm="isConfirm" />
      </Formik>
    );

    expect(container).toMatchSnapshot();
  });
});
