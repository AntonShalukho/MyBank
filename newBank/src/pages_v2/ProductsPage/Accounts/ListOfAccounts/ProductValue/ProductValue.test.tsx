import React from "react";

import "@testing-library/jest-dom";

import { ProductValue } from "./index";

import { withProviders } from "../../../../../utils/test-utils";

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

describe("Rendering ProductValue component with deactivate copy field", () => {
  beforeEach(() => {
    withProviders(
      <ProductValue account={account} activeField={false}>
        <div className="children">Hello</div>
      </ProductValue>
    );
  });

  it("Rendering container", () => {
    const container = document.querySelector(".container");

    expect(container).toBeInTheDocument();
    expect(container).not.toBeEmptyDOMElement();
  });

  it("Rendering account info block", () => {
    const info = document.querySelector(".account_info");
    const title = document.querySelector(".title");
    const children = document.querySelector(".children");

    expect(info).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(children).toBeInTheDocument();

    expect(info).toContainElement(title as HTMLElement);
    expect(info).toContainElement(children as HTMLElement);

    expect(title).toHaveTextContent("Bank name");

    expect(children).toHaveTextContent("Hello");
  });

  it("Rendering arrow link block", () => {
    const link = document.querySelector(".arrow_link");
    const icon = document.querySelector(".icon_container");

    expect(link).toBeInTheDocument();
    expect(icon).toBeInTheDocument();

    expect(link).toContainElement(icon as SVGElement);
  });

  it("ProductValue snapshot", () => {
    const productValue = withProviders(
      <ProductValue account={account} activeField={false}>
        <div className="children">Hello</div>
      </ProductValue>
    );

    expect(productValue).toMatchSnapshot();
  });
});
