import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { CurrentAccountInfo } from "../components/CurrentAccountInfo";

import { initialValue } from "../consts";

describe("render AccountInfoBlock component in Account Details en-us", () => {
  beforeEach(() =>
    withProviders(<CurrentAccountInfo account={initialValue} />)
  );

  it("Rendering components wrapper", () => {
    const container = document.querySelector(".container");
    const accountInfo = document.querySelector(".account_info");
    const title = document.querySelector(".title");
    const numberContainer = document.querySelector(".account_number_container");
    const number = document.querySelector(".number");
    const copyIcon = document.querySelector(".copy_icon");

    expect(container).toBeInTheDocument();
    expect(accountInfo).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(numberContainer).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(copyIcon).toBeInTheDocument();

    expect(container).toContainElement(accountInfo as HTMLDivElement);
    expect(accountInfo).toContainElement(title as HTMLDivElement);
    expect(accountInfo).toContainElement(numberContainer as HTMLDivElement);
    expect(numberContainer).toContainElement(number as HTMLTextAreaElement);
  });

  it("CurrentAccountInfo shapshot", () => {
    const { container } = withProviders(
      <CurrentAccountInfo account={initialValue} />
    );

    expect(container).toMatchSnapshot();
  });
});
