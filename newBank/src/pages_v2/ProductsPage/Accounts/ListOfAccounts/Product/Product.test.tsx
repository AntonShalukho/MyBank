import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "../../../../../utils/test-utils";

import { Product } from ".";

const account = {
  id: 0,
  bankProductName: "Bank name",
  iban: "",
  accountName: "",
  currency: { name: "", picture_link: "" },
  balance: 0,
  interest: 0,
  openDate: "",
};

describe("Rendering Product component", () => {
  beforeEach(() => {
    withProviders(<Product account={account} />);
  });

  it("Rendering container", () => {
    const container = document.querySelector(".current_data_block");

    expect(container).toBeInTheDocument();
    expect(container).not.toBeEmptyDOMElement();
  });

  it("Is container contents elements", () => {
    const container = document.querySelector(".current_data_block");
    const productInfo = document.querySelector(".current_value_block");
    const productValue = document.querySelector(".container");

    expect(productInfo).toBeInTheDocument();
    expect(productValue).toBeInTheDocument();

    expect(container).toContainElement(productInfo as HTMLElement);
    expect(container).toContainElement(productValue as HTMLElement);
  });
});
