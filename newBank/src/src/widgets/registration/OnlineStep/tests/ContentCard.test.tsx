import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { ContentCard } from "../components/ContentCard";

const callback = jest.fn();

describe("Rendering ContentCard component", () => {
  beforeEach(() => {
    withProviders(
      <ContentCard
        icon=""
        description="I am description"
        handleClick={callback}
      />
    );
  });

  it("Rendering container", () => {
    const container = document.querySelector(".container");
    const icon = screen.getByRole("img");
    const description = document.querySelector(".description");
    const button = screen.getByRole("button");

    expect(container).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(button).toBeInTheDocument();

    expect(container).toContainElement(icon);
    expect(container).toContainElement(description as HTMLParagraphElement);
    expect(container).toContainElement(button as HTMLButtonElement);
  });

  it("Check description and icon", () => {
    const description = document.querySelector(".description");
    const icon = screen.getByRole("img");

    expect(description).toHaveTextContent("I am description");
    expect(icon).toHaveAttribute("alt", "icon");
    expect(icon).toHaveClass("icon");
  });

  it("Check button", () => {
    const button = screen.getByRole("button");

    expect(button).toHaveClass("primarySmall button");
    expect(button).toHaveTextContent("Continue");
    button.click();
    expect(callback).toBeCalled();
  });

  it("Get snapshot", () => {
    const container = document.querySelector(".container");

    expect(container).toMatchSnapshot();
  });
});
