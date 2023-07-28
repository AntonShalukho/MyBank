import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { AccountsRequestType } from "src/shared/types/accounts";

import { ProductsList } from "../components/ProductsList";

const accounts: AccountsRequestType[] = [
  {
    id: "0",
    bankProductName: "Bank name",
    iban: "",
    accountName: "",
    currency: { name: "", picture_link: "" },
    balance: 0,
    interest: 0,
    openDate: "",
  },
];

const emptyAccounts: AccountsRequestType[] = [];

describe("Rendering 'ProductsList' component", () => {
  const { container } = withProviders(<ProductsList accounts={accounts} />);

  it("Rendering component container", () => {
    const wrapper = container.querySelector(".current_block");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).not.toBeEmptyDOMElement();
  });

  it("Get snapshot", () => {
    expect(container).toMatchSnapshot();
  });
});

describe("Rendering empty 'ProductsList' component", () => {
  it("Rendering component container", () => {
    withProviders(<ProductsList accounts={emptyAccounts} />);

    const wrapper = document.querySelector(".current_block");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toBeEmptyDOMElement();
  });

  it("Get snapshot", () => {
    const { container } = withProviders(
      <ProductsList accounts={emptyAccounts} />
    );

    expect(container).toMatchSnapshot();
  });
});
