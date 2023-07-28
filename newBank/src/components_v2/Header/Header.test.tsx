import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../utils/test-utils";

import { AuthHeader } from "./AuthHeader";

import { UnauthHeader } from "./UnauthHeader";

import { isRegistrationProcess } from "./UnauthHeader/isRegistration";

import {
  COURIER_REGISTRATION_STEP,
  FINAL_REGISTRATION_STEP,
  MAIN_PAGE_ACCOUNT_PATH,
  PRODUCTS_SIDE_BAR_TITLE,
  SIGN_UP_PATH,
} from "../../utils/variables";

describe("Render AuthHeader component", () => {
  beforeEach(() => {
    withProviders(<AuthHeader />);
  });

  it("Is rendered wrapper ", () => {
    const wrapper = document.querySelector(".wrapper");
    expect(wrapper).toBeInTheDocument;
  });

  it("Is rendered text 'Main page' ", () => {
    const title = screen.getByText("Main page");

    expect(title).toBeInTheDocument;
    expect(title).toHaveTextContent("Main page");
    expect(title).toHaveClass("title");
  });

  it("Is rendered link ", () => {
    const findInfo = screen.getByText("+ Open product");

    expect(findInfo).toBeInTheDocument;
    expect(findInfo).toHaveTextContent("+ Open product");
    expect(findInfo).toHaveClass("link");
  });

  it("Header snapshot", () => {
    const header = withProviders(<AuthHeader />);
    expect(header).toMatchSnapshot();
  });
});

describe("Render UnauthHeader component", () => {
  beforeEach(() => {
    withProviders(<UnauthHeader />);
  });

  it("Is rendered wrapper ", () => {
    const wrapper = document.querySelector(".wrapper_without_auth");
    const logoWrapper = document.querySelector(".logo");
    const btnWrapper = document.querySelector(".btn_wrapper");

    expect(wrapper).toBeInTheDocument;

    expect(wrapper).toContainElement(logoWrapper as HTMLDivElement);
    expect(wrapper).toContainElement(btnWrapper as HTMLDivElement);
  });

  it("Is rendered Logo", () => {
    const logoWrapper = document.querySelector(".logo");

    expect(logoWrapper).toBeInTheDocument();
    expect(logoWrapper).not.toBeEmptyDOMElement();
  });

  it("Is rendered button ", () => {
    const btnWrapper = document.querySelector(".btn_wrapper");
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(3);
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();

    expect(buttons[0]).toHaveTextContent("Log in");
    expect(buttons[1]).toHaveTextContent("Contact us");

    expect(buttons[0]).toHaveClass("primarySmall login_btn");
    expect(buttons[1]).toHaveClass("secondarySmall greyBtn");

    expect(btnWrapper).toContainElement(buttons[0]);
    expect(btnWrapper).toContainElement(buttons[1]);
  });

  it("Is rendered button ", () => {
    const contactButtonWrapper = document.querySelector(".contact_us_btn");
    const button = document.querySelector(".secondarySmall");

    expect(contactButtonWrapper).toBeInTheDocument();
    expect(contactButtonWrapper).toContainElement(button as HTMLButtonElement);
  });

  it("UnauthHeader snapshot", () => {
    const header = withProviders(<UnauthHeader />);
    expect(header).toMatchSnapshot();
  });
});

describe("Test isRegistration function", () => {
  it("isRegistration function", () => {
    const result1 = isRegistrationProcess(SIGN_UP_PATH);
    const result2 = isRegistrationProcess(MAIN_PAGE_ACCOUNT_PATH);
    const result3 = isRegistrationProcess(
      `${SIGN_UP_PATH}/${FINAL_REGISTRATION_STEP}`
    );
    const result4 = isRegistrationProcess(
      `${SIGN_UP_PATH}/${COURIER_REGISTRATION_STEP}`
    );
    const result5 = isRegistrationProcess(`/${PRODUCTS_SIDE_BAR_TITLE}`);

    expect(result1).toBeTruthy();
    expect(result2).toBeFalsy();
    expect(result3).toBeTruthy();
    expect(result4).toBeTruthy();
    expect(result5).toBeFalsy();
  });
});
