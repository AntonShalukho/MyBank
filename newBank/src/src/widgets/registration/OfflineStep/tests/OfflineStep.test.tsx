import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { OfflineStep } from "../index";

describe("render OfflineStep component", () => {
  beforeEach(() => {
    withProviders(<OfflineStep />);
  });

  it("Check if parts in document", () => {
    const container = document.querySelector(".wrapper");
    const subProgressBar = document.querySelector(".subProgressBar");
    const title = document.querySelector(".title");

    expect(container).toBeInTheDocument;
    expect(subProgressBar).toBeInTheDocument;
    expect(title).toBeInTheDocument;
    expect(title).toHaveTextContent("Sign up");
  });

  it("Check inputs", () => {
    const inputs = screen.getAllByRole("textbox");

    expect(inputs).toHaveLength(5);

    expect(inputs[0]).toHaveAttribute("name", "country");
    expect(inputs[0]).toHaveAttribute("value", "Poland");
    expect(inputs[0]).toHaveAttribute("placeholder", "Poland");
    expect(inputs[0]).toHaveClass("input_long");

    expect(inputs[1]).toHaveAttribute("name", "city");
    expect(inputs[1]).toHaveAttribute("maxLength", "100");
    expect(inputs[1]).toHaveAttribute("placeholder", "Enter your city");
    expect(inputs[1]).toHaveClass("input_long");

    expect(inputs[2]).toHaveAttribute("name", "street");
    expect(inputs[2]).toHaveAttribute("maxLength", "100");
    expect(inputs[2]).toHaveAttribute("placeholder", "Enter your street");
    expect(inputs[2]).toHaveClass("input_long");

    expect(inputs[3]).toHaveAttribute("name", "houseNumber");
    expect(inputs[3]).toHaveAttribute("maxLength", "10");
    expect(inputs[3]).toHaveAttribute("placeholder", "Enter house");
    expect(inputs[3]).toHaveClass("input_long");
  });

  it("Is rendered 'Button' ", () => {
    const button = screen.getByRole("button");

    expect(button).toHaveClass("primarySmall button");
    expect(button).toBeInTheDocument;
    expect(button).toHaveTextContent("Confirm");
  });

  it("OfflineStep snapshot", () => {
    const offlineStep = withProviders(<OfflineStep />);
    expect(offlineStep).toMatchSnapshot();
  });
});
