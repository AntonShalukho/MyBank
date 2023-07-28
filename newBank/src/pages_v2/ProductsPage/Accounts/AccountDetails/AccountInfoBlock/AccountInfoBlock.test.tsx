import React from "react";

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { IntlProvider } from "react-intl";

import { AccountDetailsType } from "../../../../../services/api/getAccountDetails";

import { AccountInfoBlock } from "./index";

import { localeContent } from "../../../../../translation/languages";

const account: AccountDetailsType = {
  id: 1,
  bankProductName: "",
  iban: "",
  accountName: "",
  currency: {
    name: "",
    picture_link: "",
  },
  balance: "",
  interest: "",
  openDate: "",
};

describe("render AccountInfoBlock component in Account Details en-us", () => {
  beforeEach(() => {
    render(
      <IntlProvider
        locale="en-us"
        defaultLocale="en"
        messages={localeContent["en-us"]}
      >
        <AccountInfoBlock account={account} />
      </IntlProvider>
    );
  });

  it("Is rendered text 'Date of opening' ", () => {
    const date = screen.getByText("Date of opening");

    expect(date).toBeInTheDocument;
    expect(date).toHaveTextContent("Date of opening");
    expect(date).toHaveClass("title");
  });
});

it("AccountInfoBlock shapshot", () => {
  const accountBlock = render(
    <IntlProvider
      locale="en-us"
      defaultLocale="en"
      messages={localeContent["en-us"]}
    >
      <AccountInfoBlock account={account} />
    </IntlProvider>
  );
  expect(accountBlock).toMatchSnapshot();
});
