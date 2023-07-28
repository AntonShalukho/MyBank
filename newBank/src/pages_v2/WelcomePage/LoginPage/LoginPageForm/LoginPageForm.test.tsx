import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../utils/test-utils";

import { LoginPageForm } from ".";

describe("Rendering BlockThree component", () => {
  beforeEach(() => {
    withProviders(<LoginPageForm />);
  });

  it("Rendering all elements", () => {
    const wrapper = document.querySelector(".wrapper");
    const title = document.querySelector(".title");
    const form = document.querySelector(".form");
    const input = document.querySelector(".input_long");
    const continueButton = screen.getByRole("button", { name: "Continue" });
    const signUpButton = screen.getByRole("button", { name: "Sign up" });

    expect(wrapper).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(continueButton).toBeInTheDocument();
    expect(signUpButton).toBeInTheDocument();
  });

  it("render with descendants", () => {
    const wrapper = document.querySelector(".wrapper");
    const title = document.querySelector(".title");
    const form = document.querySelector(".form");
    const input = document.querySelector(".input_long");
    const continueButton = screen.getByRole("button", { name: "Continue" });
    const signUpButton = screen.getByRole("button", { name: "Sign up" });

    expect(wrapper).toContainElement(title as HTMLElement);
    expect(wrapper).toContainElement(form as HTMLElement);
    expect(form).toContainElement(input as HTMLElement);
    expect(form).toContainElement(continueButton as HTMLElement);
    expect(form).toContainElement(signUpButton as HTMLElement);
  });

  it("LoginPageForm snapshot", () => {
    withProviders(<LoginPageForm />);
    expect(LoginPageForm).toMatchSnapshot();
  });
});
