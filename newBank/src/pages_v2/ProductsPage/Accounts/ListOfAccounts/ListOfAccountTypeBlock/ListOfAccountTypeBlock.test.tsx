import React from "react";

import "@testing-library/jest-dom";

import { ListOfAccountType } from "../../../../../services/api/getListOfAccounts";

import { withProviders } from "../../../../../utils/test-utils";

import { ListOfAccountTypeBlock } from ".";

const accounts: ListOfAccountType[] = [
  {
    id: 0,
    bankProductName: "Bank name",
    iban: "",
    accountName: "",
    currency: { name: "", picture_link: "" },
    balance: 0,
    interest: 0,
    openDate: "",
  },
];

const emptyAccounts: ListOfAccountType[] = [];

describe("Rendering 'ListOfAccountTypeBlock' component", () => {
  beforeEach(() => {
    withProviders(<ListOfAccountTypeBlock accounts={accounts} />);
  });

  it("Rendering component container", () => {
    const container = document.querySelector(".current_block");

    expect(container).toBeInTheDocument();
    expect(container).not.toBeEmptyDOMElement();
  });
});
describe("Rendering empty 'ListOfAccountTypeBlock' component", () => {
  beforeEach(() => {
    withProviders(<ListOfAccountTypeBlock accounts={emptyAccounts} />);
  });

  it("Rendering component container", () => {
    const container = document.querySelector(".current_block");

    expect(container).toBeInTheDocument();
    expect(container).toBeEmptyDOMElement();
  });
});
