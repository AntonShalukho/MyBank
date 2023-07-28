import React from "react";

import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { SingUpStepFour } from ".";

import { withProviders } from "../../../../utils/test-utils";

import { Button } from "../../../../uikit_v2/Button";

describe("Render SingUpStepFour component", () => {
  beforeEach(() => {
    withProviders(<SingUpStepFour />);
  });

  it("Rendering all elements", () => {
    const container = document.querySelector(".container");
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".sub_title");
    const btnContainer = document.querySelector(".radio_btn_container");

    expect(container).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(btnContainer).toBeInTheDocument();
  });

  it("Checking Main Container includes btnContainer", () => {
    const container = document.querySelector(".container");
    const btnContainer = document.querySelector(".radio_btn_container");
    expect(container).toContainElement(btnContainer as HTMLDivElement);
  });

  it("Checking Component Title", () => {
    const title = document.querySelector(".title");
    expect(title).toHaveTextContent("Sign up");
    expect(title).toHaveClass("title");
  });

  it("Checking Component Subtitle", () => {
    const subtitle = screen.getByRole("heading", { level: 2 });
    expect(subtitle).toHaveTextContent(
      "Choose one of the registration process variants"
    );
    expect(subtitle).toHaveClass("sub_title");
  });

  it("Checking Component Radio Button Container", () => {
    const btnContainer = document.querySelector(".radio_btn_container");
    const radioBtn = document.querySelector(".isCard");

    expect(btnContainer).toHaveClass("radio_btn_container");
    expect(btnContainer).toContainElement(radioBtn as HTMLElement);
  });

  it("Checking 'Confirm' Button", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} variant="primarySmall" />);
    const button = screen.getAllByRole("button");
    userEvent.click(screen.getByText("Confirm"));
    expect(screen.getByText("Confirm")).toBeCalled;
    expect(button).toBeInTheDocument;
    expect(screen.queryByText("Confirm")).not.toBeNull();
  });

  it("SingUpStepFour snapshot", () => {
    const singUpStepFour = withProviders(<SingUpStepFour />);
    expect(singUpStepFour).toMatchSnapshot();
  });
});
