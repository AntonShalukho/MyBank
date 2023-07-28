import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { BackButton } from "..";

import { withProviders } from "../../../lib/test-utils";

const backButton = (
  <BackButton
    onClick={function (): void {
      throw new Error("Function not implemented.");
    }}
  />
);

describe("BackButton block en-us", () => {
  beforeEach(() => {
    withProviders(backButton);
  });

  it("Rendered Button pic component", () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("Rendered back button didn't confirm", () => {
    withProviders(backButton);

    const backButtonTest = document.querySelector(".back");

    expect(backButtonTest).toBeInTheDocument();
  });

  it("Is rendered text 'Back' ", () => {
    const component = screen.getByText("Back");

    expect(component).toBeInTheDocument();
    expect(component).toHaveTextContent("Back");
    expect(component).toHaveClass("text");
  });
});

it("BackButton snapshot", () => {
  const backButtonSnap = withProviders(backButton);

  expect(backButtonSnap).toMatchSnapshot();
});
