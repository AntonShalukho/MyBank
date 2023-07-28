import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { withProviders } from "src/shared/lib/test-utils";

import { SignUpStep } from "..";

describe("render SignUp component", () => {
  beforeEach(() => {
    withProviders(<SignUpStep />);
  });

  it("Check if parts in document", () => {
    const wrapper = document.querySelector(".wrapper");
    const blockName = document.querySelector(".block_name");
    const blockSurname = document.querySelector(".block_surname");
    const title = document.querySelector(".title");
    const signUp = screen.getByText("Sign up");

    expect(wrapper).toBeInTheDocument;
    expect(blockName).toBeInTheDocument;
    expect(blockSurname).toBeInTheDocument;
    expect(title).toBeInTheDocument;
    expect(signUp).toHaveTextContent("Sign up");
    expect(signUp).toHaveClass("title");
  });

  it("Is rendered 'Button' ", () => {
    const button = screen.getAllByRole("button");
    userEvent.click(screen.getByText("Confirm"));

    expect(screen.getByText("Confirm")).toBeCalled;
    expect(button).toBeInTheDocument;
    expect(screen.queryByText("Confirm")).not.toBeNull();
  });

  it("SingUpStepTwo snapshot", () => {
    const singUpStepTwo = withProviders(<SignUpStep />);
    expect(singUpStepTwo).toMatchSnapshot();
  });
});
