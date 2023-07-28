import React from "react";

import "@testing-library/jest-dom";

import { ListOfAccounts } from "./index";

import { withProviders } from "../../../../utils/test-utils";

describe("List of Accounts component", () => {
  beforeEach(() => {
    withProviders(<ListOfAccounts />);
  });

  it("Rendering account list file nesting", () => {
    const layout = document.querySelector(".layout");
    const wrapper = document.querySelector(".wrapper");
    const accounts = document.querySelector(".accounts");

    expect(layout).toBeInTheDocument();
    expect(wrapper).toBeInTheDocument();
    expect(accounts).toBeInTheDocument();

    expect(layout).toContainElement(wrapper as HTMLElement);
    expect(wrapper).toContainElement(accounts as HTMLElement);
  });
});

it("ListOfAccounts snapshot", () => {
  const listOfAccounts = withProviders(<ListOfAccounts />);

  expect(listOfAccounts).toMatchSnapshot();
});
