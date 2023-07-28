import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../../utils/test-utils";

import { PopupContent } from ".";

const onClose = jest.fn();

describe("Rendering PopupContent component", () => {
  beforeEach(() => {
    withProviders(<PopupContent onClose={onClose} />);
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".wrapper");
    const title = document.querySelector(".title");
    const buttonContainer = document.querySelector(".button_container");

    expect(wrapper).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(buttonContainer).toBeInTheDocument();

    expect(wrapper).toContainElement(title as HTMLDivElement);
    expect(wrapper).toContainElement(buttonContainer as HTMLDivElement);
  });

  it("Rendering components title", () => {
    const title = document.querySelector(".title");

    expect(title).toHaveTextContent(
      "Do you want to finish the registration process?"
    );
  });

  it("Rendering components button container", () => {
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();

    expect(buttons[0]).toHaveTextContent("Cancel");
    expect(buttons[1]).toHaveTextContent("Confirm");

    expect(buttons[0]).toHaveClass("secondarySmall button");
    expect(buttons[1]).toHaveClass("primarySmall button");
  });
});
