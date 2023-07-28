import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../../../utils/test-utils";

import { UnsuccessSelfie } from ".";

const handleClose = jest.fn();
const handleOfflineStep = jest.fn();
const clearPlayVideoInterval = jest.fn();

describe("Rendering UnsuccessSelfie component with not last attempt", () => {
  beforeEach(() => {
    withProviders(
      <UnsuccessSelfie
        onClose={handleClose}
        isLastAttempt={false}
        handleOfflineStep={handleOfflineStep}
        clearPlayVideoInterval={clearPlayVideoInterval}
      />
    );
  });

  it("Rendering main wrapper ofContentWithoutCamera component", () => {
    const wrapper = document.querySelector(".wrapper");
    const title = screen.getByText("Sorry you photo wasn’t verified!");
    const description = screen.getByText(
      "Please try again or cancel registration process."
    );
    const icon = document.querySelector(".icon");
    const buttonWrapper = document.querySelector(".wrapper_button");

    expect(wrapper).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(buttonWrapper).toBeInTheDocument();

    expect(wrapper).toContainElement(title);
    expect(wrapper).toContainElement(description);
    expect(wrapper).toContainElement(icon as SVGSVGElement);
    expect(wrapper).toContainElement(buttonWrapper as HTMLDivElement);
  });

  it("Rendering title", () => {
    const title = screen.getByText("Sorry you photo wasn’t verified!");

    expect(title).toHaveClass("title");
  });

  it("Rendering block with buttons", () => {
    const buttonWrapper = document.querySelector(".wrapper_button");
    const buttons = screen.getAllByRole("button");

    expect(buttonWrapper).toContainElement(buttons[0]);
    expect(buttonWrapper).toContainElement(buttons[1]);
  });

  it("Rendering button elements", () => {
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("Try again");
    expect(buttons[0]).toHaveClass("primarySmall");
    expect(buttons[1]).toHaveTextContent("Cancel");
    expect(buttons[1]).toHaveClass("secondarySmall");
  });
});

describe("Rendering UnsuccessSelfie component with not last attempt", () => {
  beforeEach(() => {
    withProviders(
      <UnsuccessSelfie
        onClose={handleClose}
        isLastAttempt={true}
        handleOfflineStep={handleOfflineStep}
        clearPlayVideoInterval={clearPlayVideoInterval}
      />
    );
  });

  it("Rendering main wrapper ofContentWithoutCamera component", () => {
    const wrapper = document.querySelector(".wrapper");
    const title = screen.getByText("Sorry you photo wasn’t verified!");
    const description = screen.getByText(
      "Please choose the another way to register or cancel registration process."
    );
    const icon = document.querySelector(".icon");
    const buttonWrapper = document.querySelector(".wrapper_button");

    expect(wrapper).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(buttonWrapper).toBeInTheDocument();

    expect(wrapper).toContainElement(title);
    expect(wrapper).toContainElement(description);
    expect(wrapper).toContainElement(icon as SVGSVGElement);
    expect(wrapper).toContainElement(buttonWrapper as HTMLDivElement);
  });

  it("Rendering title", () => {
    const description = screen.getByText(
      "Please choose the another way to register or cancel registration process."
    );

    expect(description).toHaveClass("description");
  });

  it("Rendering button elements", () => {
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("Continue offline");
    expect(buttons[0]).toHaveClass("primarySmall");
    expect(buttons[1]).toHaveTextContent("Cancel");
    expect(buttons[1]).toHaveClass("secondarySmall");
  });
});
