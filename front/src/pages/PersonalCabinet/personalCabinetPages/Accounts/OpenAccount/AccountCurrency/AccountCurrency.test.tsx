import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";

import { AccountCurrency } from "./index";

import { PLN, EUR, USD } from "../../../../../../components/Icons";

describe("Account currency component", () => {
  const onClick = jest.fn();

  it("Is render wrapper, onClick function called", () => {
    const { container } = render(
      <AccountCurrency currencyName="PLN" isActive={true} onClick={onClick}>
        <PLN />
      </AccountCurrency>
    );
    const wrapper = container.querySelectorAll("div");
    expect(wrapper).toHaveLength(1);
    expect(wrapper[0]).toBeInTheDocument;
    fireEvent.click(wrapper[0]);
    expect(onClick).toBeCalledTimes(1);
  });

  it("Have active class", () => {
    const { container } = render(
      <AccountCurrency currencyName="PLN" isActive={true} onClick={onClick}>
        <PLN />
      </AccountCurrency>
    );
    const wrapper = container.querySelectorAll("div");
    expect(wrapper[0]).toHaveClass("wrapper", "wrapper_active");
  });

  it("Haven't active class", () => {
    const { container } = render(
      <AccountCurrency currencyName="PLN" isActive={false} onClick={onClick}>
        <PLN />
      </AccountCurrency>
    );
    const wrapper = container.querySelectorAll("div");
    expect(wrapper[0]).toHaveClass("wrapper");
    expect(wrapper[0]).not.toHaveClass("wrapper_active");
  });

  it("Is span rendered and has current 'PLN' ", () => {
    const { container } = render(
      <AccountCurrency currencyName="PLN" isActive={true} onClick={onClick}>
        <PLN />
      </AccountCurrency>
    );
    const span = container.querySelector("span");

    expect(span).toBeInTheDocument;
    expect(span).toHaveTextContent("PLN");
  });

  it("Is span rendered and has current 'USD' ", () => {
    const { container } = render(
      <AccountCurrency currencyName="USD" isActive={true} onClick={onClick}>
        <USD />
      </AccountCurrency>
    );
    const span = container.querySelector("span");

    expect(span).toBeInTheDocument;
    expect(span).toHaveTextContent("USD");
  });

  it("Is span rendered and has current 'EUR' ", () => {
    const { container } = render(
      <AccountCurrency currencyName="EUR" isActive={true} onClick={onClick}>
        <EUR />
      </AccountCurrency>
    );
    const span = container.querySelector("span");

    expect(span).toBeInTheDocument;
    expect(span).toHaveTextContent("EUR");
  });

  it("Get snapshot", () => {
    const account = render(
      <AccountCurrency currencyName="EUR" isActive={true} onClick={onClick}>
        <EUR />
      </AccountCurrency>
    );
    expect(account).toMatchSnapshot();
  });
});
