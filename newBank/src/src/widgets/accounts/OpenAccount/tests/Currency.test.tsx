import React, { ReactNode } from "react";

import "@testing-library/jest-dom";

import { render, fireEvent } from "@testing-library/react";

import { CurrencyIcon } from "src/shared/ui/CurrencyIcon";

import { Currency } from "../components/Currency";

const onClick = jest.fn();
const getCurrency = (currencyName: string, isActive: boolean) => (
  <Currency currencyName={currencyName} isActive={isActive} onClick={onClick}>
    <CurrencyIcon currency={currencyName} />
  </Currency>
);

describe("Account currency component", () => {
  it("Is render wrapper, onClick function called", () => {
    const { container } = render(getCurrency("PLN", true));
    const wrapper = container.querySelectorAll("div");

    expect(wrapper).toHaveLength(1);
    expect(wrapper[0]).toBeInTheDocument;
    fireEvent.click(wrapper[0]);
    expect(onClick).toBeCalledTimes(1);
  });

  it("Have active class", () => {
    const { container } = render(getCurrency("PLN", true));
    const wrapper = container.querySelectorAll("div");

    expect(wrapper[0]).toHaveClass("wrapper", "wrapper_active");
  });

  it("Haven't active class", () => {
    const { container } = render(getCurrency("PLN", false));
    const wrapper = container.querySelectorAll("div");

    expect(wrapper[0]).toHaveClass("wrapper");
    expect(wrapper[0]).not.toHaveClass("wrapper_active");
  });

  it("Is span rendered and has current 'PLN' ", () => {
    const { container } = render(getCurrency("PLN", true));
    const span = container.querySelector("span");

    expect(span).toBeInTheDocument;
    expect(span).toHaveTextContent("PLN");
  });

  it("Is span rendered and has current 'USD' ", () => {
    const { container } = render(getCurrency("USD", true));
    const span = container.querySelector("span");

    expect(span).toBeInTheDocument;
    expect(span).toHaveTextContent("USD");
  });

  it("Is span rendered and has current 'EUR' ", () => {
    const { container } = render(getCurrency("EUR", true));
    const span = container.querySelector("span");

    expect(span).toBeInTheDocument;
    expect(span).toHaveTextContent("EUR");
  });

  it("Get snapshot", () => {
    const account = render(getCurrency("EUR", true));

    expect(account).toMatchSnapshot();
  });
});
