import React from "react";

import "@testing-library/jest-dom";

import { render, fireEvent, screen } from "@testing-library/react";

import { BackButtonOld } from "./index";

import { withProviders } from "../../utils/test-utils";

const backButton = (
  <BackButtonOld
    onClick={function (): void {
      throw new Error("Function not implemented.");
    }}
  />
);

describe("BackButton block en-us", () => {
  const onSubmit = jest.fn();
  beforeEach(() => {
    withProviders(backButton);
  });

  it("Rendered Button pic component", () => {
    const component = document.querySelector(".back-button-img");

    expect(screen.getByRole("img")).toBeInTheDocument;
    expect(component).toBeInTheDocument;
    expect(component).toHaveClass("back-button-img");
  });

  it("Rendered back button didn't confirm", () => {
    withProviders(backButton);

    const backButtonTest = document.querySelector(".back-button");

    expect(backButtonTest).toBeInTheDocument;
    expect(backButtonTest).toHaveClass("back-button");
    expect(backButtonTest).not.toHaveClass("back-buttons");
  });

  it("Is rendered text 'Back' ", () => {
    const backButton = screen.getByText("Back");

    expect(backButton).toBeInTheDocument;
    expect(backButton).toHaveTextContent("Back");
    expect(backButton).toHaveClass("back-button-text");
  });
});

it("BackButton snapshot", () => {
  const backButtonsnap = withProviders(backButton);

  expect(backButtonsnap).toMatchSnapshot();
});
