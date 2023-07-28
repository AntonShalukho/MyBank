import React from "react";

import "@testing-library/jest-dom";

import { fireEvent, screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { Formik } from "formik";

import { CurrencyBlock } from "../components/CurrencyBlock/index";

describe("Account currency component", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    withProviders(
      <Formik
        initialValues={{
          interest: "11",
          currency: "PLN",
        }}
        onSubmit={onSubmit}
      >
        <CurrencyBlock currency="currency" interest="interest" />
      </Formik>
    );
  });

  it("Rendering title", () => {
    const title = screen.getByText(widgetEn.widget_currency);

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("currency_title");
  });

  it("Is render currency_block, onClick function called", () => {
    const wrapper = document.querySelector(".currency_block");
    const currency = document.querySelectorAll(".wrapper");
    const currencyDesc = document.querySelectorAll(".currency");

    expect(wrapper).toBeInTheDocument();

    expect(currency).toHaveLength(3);
    expect(currencyDesc).toHaveLength(3);

    currency.forEach((currency, index) => {
      expect(currency).toContainElement(currencyDesc[index] as HTMLSpanElement);
    });

    expect(currencyDesc[0]).toHaveTextContent("PLN");
    expect(currencyDesc[1]).toHaveTextContent("USD");
    expect(currencyDesc[2]).toHaveTextContent("EUR");

    expect(currency[0]).toHaveClass("wrapper", "wrapper_active");
    expect(currency[1]).toHaveClass("wrapper");
    expect(currency[2]).toHaveClass("wrapper");

    fireEvent.click(currency[1]);
    expect(currency[0]).toHaveClass("wrapper");
    expect(currency[1]).toHaveClass("wrapper", "wrapper_active");
    expect(currency[2]).toHaveClass("wrapper");

    fireEvent.click(currency[2]);
    expect(currency[0]).toHaveClass("wrapper");
    expect(currency[1]).toHaveClass("wrapper");
    expect(currency[2]).toHaveClass("wrapper", "wrapper_active");
  });

  it("Get snapshot", () => {
    const { container } = withProviders(
      <Formik
        initialValues={{
          interest: "11",
          currency: "",
        }}
        onSubmit={onSubmit}
      >
        <CurrencyBlock currency="currency" interest="interest" />
      </Formik>
    );

    expect(container).toMatchSnapshot();
  });
});
