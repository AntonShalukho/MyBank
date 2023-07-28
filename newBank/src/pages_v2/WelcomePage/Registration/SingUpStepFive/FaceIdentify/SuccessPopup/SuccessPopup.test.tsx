import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../../../utils/test-utils";

import { SuccessPopup } from ".";

const handleClose = jest.fn();
const handleSubmit = jest.fn();

describe("Rendering SuccessPopup  component", () => {
  beforeEach(() => {
    withProviders(
      <SuccessPopup
        handleSideEffects={handleClose}
        handleSubmit={handleSubmit}
      />
    );
  });

  it("Rendering main wrapper ofContentWithoutCamera component", () => {
    const wrapper = document.querySelector(".wrapper");
    const title = screen.getByText("Your biometrical verification is correct!");
    const icon = document.querySelector(".icon");
    const buttonWrapper = document.querySelector(".buttons_container");

    expect(wrapper).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(buttonWrapper).toBeInTheDocument();

    expect(wrapper).toContainElement(title);
    expect(wrapper).toContainElement(icon as SVGSVGElement);
    expect(wrapper).toContainElement(buttonWrapper as HTMLDivElement);
  });

  it("Rendering title", () => {
    const title = screen.getByText("Your biometrical verification is correct!");

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("title");
  });

  it("Rendering icon", () => {
    const icon = document.querySelector(".icon");

    expect(icon).toBeInTheDocument();
  });

  it("Rendering block with buttons", () => {
    const buttonWrapper = document.querySelector(".buttons_container");
    const buttons = screen.getAllByRole("button");

    expect(buttonWrapper).toContainElement(buttons[0]);
    expect(buttonWrapper).toContainElement(buttons[1]);
  });

  it("Rendering button elements", () => {
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("Continue");
    expect(buttons[0]).toHaveClass("primarySmall button");
    expect(buttons[1]).toHaveTextContent("Cancel");
    expect(buttons[1]).toHaveClass("secondarySmall button");
  });
});
