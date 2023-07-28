import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { NavigationBlock } from "./index";

import { withProviders } from "../../../../utils/test-utils";

describe("NavigationBlock component", () => {
  beforeEach(() => {
    withProviders(<NavigationBlock />);
  });

  it("Is rendered text 'Accounts' ", () => {
    const accounts = screen.getByText("Accounts");

    expect(accounts).toBeInTheDocument;
    expect(accounts).toHaveTextContent("Accounts");
    expect(accounts).toHaveClass("link");
  });

  it("Check if parts in document", () => {
    const wrapper = document.querySelector(".wrapper");
    const list = document.querySelector(".sidebar_list");

    expect(wrapper).toBeInTheDocument();
    expect(list).toBeInTheDocument();
  });

  it("Rendered all links", () => {
    const link = screen.getAllByRole(/link/);

    expect(link).toHaveLength(1);
  });
});

it("NavigationBlock snapshot", () => {
  const navigationBlock = withProviders(<NavigationBlock />);

  expect(navigationBlock).toMatchSnapshot();
});
