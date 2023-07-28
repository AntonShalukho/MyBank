import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { withProviders } from "src/shared/lib/test-utils";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { FinancialStep } from "..";

describe("render Financial component", () => {
  beforeEach(() => {
    withProviders(<FinancialStep />);
  });

  it("Check if parts in document", () => {
    const container = document.querySelector(".container");
    const radioBtn = document.querySelector(".radioBtn_subtitles");
    const title = document.querySelector(".title");
    const signUp = screen.getByText("Sign up");

    expect(container).toBeInTheDocument();
    expect(radioBtn).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(signUp).toHaveClass("title");
  });

  it("Is rendered 'Button' and text 'Choose Identity Document type' ", () => {
    const identity = screen.getByText(widgetEn.widget_IDRadioTitle);
    userEvent.click(screen.getByText("Confirm"));

    expect(screen.getByText("Confirm")).toBeCalled;
    expect(screen.queryByText("Confirm")).not.toBeNull();
    expect(identity).toBeInTheDocument();
    expect(identity).toHaveClass("radioBtn_subtitles");
  });

  it("Financial snapshot", () => {
    const financial = withProviders(<FinancialStep />);
    expect(financial).toMatchSnapshot();
  });
});
