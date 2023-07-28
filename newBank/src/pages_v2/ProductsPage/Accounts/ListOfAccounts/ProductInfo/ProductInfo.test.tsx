import React from "react";

import "@testing-library/jest-dom";

import { screen, render, fireEvent } from "@testing-library/react";

import { ProductInfo } from "./index";

import { withProviders } from "../../../../../utils/test-utils";

import { PLN, EUR, USD } from "../../../../../components_v2/Icon";

const prodInfoData = (
  <ProductInfo
    account={{
      id: 0,
      bankProductName: "",
      iban: "",
      accountName: "",
      currency: {
        name: "",
        picture_link: "",
      },
      balance: 0,
      interest: 0,
      openDate: "",
    }}
  />
);

describe("Product info block en-us", () => {
  const onSubmit = jest.fn();

  beforeEach(() => {
    withProviders(prodInfoData);
  });

  it("render 'PLN' ", () => {
    render(<PLN />);

    const pln = screen.getByDisplayValue;

    expect(pln).toBeInTheDocument;
  });

  it("render 'USD' ", () => {
    render(<USD />);

    const usd = screen.getByDisplayValue;

    expect(usd).toBeInTheDocument;
  });

  it("Check if parts in document", () => {
    const block = document.querySelector(".current_value_block");
    const name = document.querySelector(".current_account_name");
    const data = document.querySelector(".current_account_data");
    const logo = document.querySelector(".logo_currency");
    const value = document.querySelector(".value_currency");

    expect(block).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(data).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(value).toBeInTheDocument();
  });
});

it("ProductInfo snapshot", () => {
  const productInfo = withProviders(prodInfoData);

  expect(productInfo).toMatchSnapshot();
});
