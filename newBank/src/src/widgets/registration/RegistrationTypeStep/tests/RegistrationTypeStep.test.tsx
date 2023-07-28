import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { RegistrationTypeStep } from "..";

describe("Render SingUpStepFour component", () => {
  beforeEach(() => {
    withProviders(<RegistrationTypeStep />);
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
    expect(subtitle).toHaveTextContent(widgetEn.widget_signUpOptionTitle);
    expect(subtitle).toHaveClass("sub_title");
  });

  it("Checking Component Radio Button Container", () => {
    const btnContainer = document.querySelector(".radio_btn_container");
    const radioBtn = document.querySelector(".isCard");

    expect(btnContainer).toHaveClass("radio_btn_container");
    expect(btnContainer).toContainElement(radioBtn as HTMLElement);
  });

  it("SingUpStepFour snapshot", () => {
    const singUpStepFour = withProviders(<RegistrationTypeStep />);
    expect(singUpStepFour).toMatchSnapshot();
  });
});
