import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { AccountInfoBlock } from "../components/AccountInfoBlock/index";

import { initialValue } from "../consts";

describe("render AccountInfoBlock component in Account Details en-us", () => {
  beforeEach(() =>
    withProviders(
      <AccountInfoBlock
        account={{
          ...initialValue,
          bankProductName: "Saving",
          openDate: "12.12.2000",
        }}
      />
    )
  );

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".wrapper");
    const dateWrapper = document.querySelector(".date_wrapper");
    const interestWrapper = document.querySelector(".interest_wrapper");
    const titles = document.querySelectorAll(".title");
    const values = document.querySelectorAll(".value");
    const interestContainer = document.querySelector(".interest_container");
    const dataContainer = document.querySelector(".data_container");

    expect(wrapper).toBeInTheDocument();
    expect(dateWrapper).toBeInTheDocument();
    expect(interestWrapper).toBeInTheDocument();

    expect(titles).toHaveLength(2);
    expect(values).toHaveLength(2);
    expect(titles[0]).toBeInTheDocument();
    expect(titles[1]).toBeInTheDocument();
    expect(values[0]).toBeInTheDocument();
    expect(values[1]).toBeInTheDocument();

    expect(interestContainer).toBeInTheDocument();
    expect(dataContainer).toBeInTheDocument();
    expect(interestContainer).toHaveTextContent("11");
    expect(dataContainer).toHaveTextContent("12.12.2000");

    expect(wrapper).toContainElement(dateWrapper as HTMLDivElement);
    expect(wrapper).toContainElement(interestWrapper as HTMLDivElement);
  });

  it("Is rendered values", () => {
    const date = screen.getByText("Date of opening");
    const interest = screen.getByText(widgetEn.widget_interestRate);

    expect(date).toBeInTheDocument;
    expect(interest).toBeInTheDocument;
    expect(date).toHaveClass("title");
    expect(interest).toHaveClass("title");
  });

  it("Rendering without interest", () => {
    const { container } = withProviders(
      <AccountInfoBlock account={initialValue} />
    );
    const dateWrapper = container.querySelector(".date_wrapper");
    const interestWrapper = container.querySelector(".interest_wrapper");

    expect(container).toContainElement(dateWrapper as HTMLDivElement);
    expect(container).not.toContainElement(interestWrapper as HTMLDivElement);
    expect(interestWrapper).toBeNull();
  });

  it("AccountInfoBlock shapshot", () => {
    const accountBlock = withProviders(
      <AccountInfoBlock
        account={{ ...initialValue, bankProductName: "Saving" }}
      />
    );

    expect(accountBlock).toMatchSnapshot();
  });
});
