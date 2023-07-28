import React from "react";

import "@testing-library/jest-dom";

import { screen, render } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { StepLocation } from "./index";

import { withProviders } from "../../../../utils/test-utils";

describe("render StepLocation component", () => {
  beforeEach(() => {
    withProviders(<StepLocation />);
  });

  it("Check if parts in document", () => {
    const container = document.querySelector(".wrapper");
    const subProgressBar = document.querySelector(".subProgressBar");
    const title = document.querySelector(".title");

    expect(container).toBeInTheDocument;
    expect(subProgressBar).toBeInTheDocument;
    expect(title).toBeInTheDocument;
    expect(title).toHaveTextContent("Sing up");
  });

  it("Is rendered 'Button' ", () => {
    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(button).toBeInTheDocument;
    expect(button).toHaveTextContent("Confirm");
  });

  it("StepLocation snapshot", () => {
    const stepLocation = withProviders(<StepLocation />);
    expect(stepLocation).toMatchSnapshot();
  });
});
