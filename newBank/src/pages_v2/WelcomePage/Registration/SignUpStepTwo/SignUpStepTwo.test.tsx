import React from "react";

import "@testing-library/jest-dom";

import { screen, render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { SignUpStepTwo } from "./index";

import { withProviders } from "../../../../utils/test-utils";

describe("render SingUpStepTwo component", () => {
  beforeEach(() => {
    withProviders(<SignUpStepTwo />);
  });

  it("Check if parts in document", () => {
    const wrapper = document.querySelector(".wrapper");
    const title = document.querySelector(".title");

    expect(wrapper).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent("Sign up");

    expect(wrapper).toContainElement(title as HTMLHeadingElement);
  });

  it("SingUpStepTwo snapshot", () => {
    const singUpStepTwo = withProviders(<SignUpStepTwo />);
    expect(singUpStepTwo).toMatchSnapshot();
  });
});
