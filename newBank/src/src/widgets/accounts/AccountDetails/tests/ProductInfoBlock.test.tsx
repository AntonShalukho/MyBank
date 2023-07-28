import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { screen } from "@testing-library/react";

import { ProductInfoBlock } from "../components/ProductInfoBlock";

import { initialValue } from "../consts";

describe("render AccountInfoBlock component in Account Details en-us", () => {
  beforeEach(() => withProviders(<ProductInfoBlock account={initialValue} />));

  it("Rendering components wrapper", () => {
    const container = document.querySelector(".current_value_block");
    const data = document.querySelector(".current_account_data");
    const logo = document.querySelector(".logo_currency");
    const name = document.querySelector(".name_currency");
    const value = document.querySelector(".value_currency");

    expect(container).toBeInTheDocument();
    expect(data).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(name).toBeInTheDocument();
    expect(value).toBeInTheDocument();

    expect(name).toHaveTextContent("");
    expect(value).toHaveTextContent("0,00");

    expect(container).toContainElement(data as HTMLDivElement);
    expect(data).toContainElement(logo as HTMLDivElement);
    expect(data).toContainElement(name as HTMLDivElement);
    expect(data).toContainElement(value as HTMLDivElement);
  });

  it("Rendering with image", () => {
    const { container } = withProviders(
      <ProductInfoBlock
        account={{
          ...initialValue,
          currency: { name: "PLN", picture_link: "www.google.com" },
        }}
      />
    );

    const name = container.querySelector(".name_currency");
    const img = screen.getByRole("img");

    expect(name).toHaveTextContent("PLN");
    expect(name).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });

  it("ProductInfoBlock snapshot", () => {
    const { container } = withProviders(
      <ProductInfoBlock account={initialValue} />
    );

    expect(container).toMatchSnapshot();
  });
});
