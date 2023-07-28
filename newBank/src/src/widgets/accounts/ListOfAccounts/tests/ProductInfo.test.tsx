import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { ProductInfo } from "../components/ProductInfo/index";

describe("Product info block en-us", () => {
  const { container } = withProviders(
    <ProductInfo
      account={{
        id: "0",
        bankProductName: "",
        iban: "",
        accountName: "I'm name of account",
        currency: {
          name: "PLN",
          picture_link: "",
        },
        balance: 0,
        interest: 0,
        openDate: "",
      }}
    />
  );

  it("Check if parts in document", () => {
    const block = container.querySelector(".current_value_block");
    const name = container.querySelector(".current_account_name");
    const data = container.querySelector(".current_account_data");
    const currency = container.querySelector(".name_currency");
    const logo = container.querySelector(".logo_currency");
    const value = container.querySelector(".value_currency");

    expect(block).toBeInTheDocument();
    expect(block).toContainElement(name as HTMLDivElement);
    expect(block).toContainElement(data as HTMLDivElement);

    expect(name).toBeInTheDocument();
    expect(name).toHaveTextContent("I'm name of account");

    expect(data).toBeInTheDocument();
    expect(data).toContainElement(currency as HTMLDivElement);
    expect(data).toContainElement(logo as HTMLDivElement);
    expect(data).toContainElement(value as HTMLDivElement);

    expect(currency).toBeInTheDocument();
    expect(currency).toHaveTextContent("PLN");

    expect(logo).toBeInTheDocument();
    expect(logo).not.toBeEmptyDOMElement();

    expect(value).toBeInTheDocument();
    expect(value).toHaveTextContent("0,00");
  });

  it("Get snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});
