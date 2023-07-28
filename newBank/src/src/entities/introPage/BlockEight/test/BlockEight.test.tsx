import "@testing-library/jest-dom";

import { screen, render } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { Button } from "src/shared/ui/Button";

import { BlockEight } from "..";

describe("Intro Page Block Eight", () => {
  beforeEach(() => {
    withProviders(<BlockEight />);
  });

  it("Check if parts in document", () => {
    const container = document.querySelector(".container");
    const wrapper = document.querySelector(".wrapper");
    const blockRightImg = document.querySelector("block_right_img");
    const blockLeft = document.querySelector("block_left");
    expect(container).toBeInTheDocument;
    expect(wrapper).toBeInTheDocument;
    expect(blockRightImg).toBeInTheDocument;
    expect(blockLeft).toBeInTheDocument;
  });

  it("Is rendered 'Button' ", () => {
    const handleIntro = jest.fn();
    render(<Button onClick={handleIntro} variant="primarySmall" />);
    const button = screen.getAllByRole("button");
    expect(button).toBeInTheDocument;
    expect(screen.queryByText("+ Get started")).toBeNull();
  });
});

it("BlockSeven snapshot", () => {
  const blockEight = withProviders(<BlockEight />);

  expect(blockEight).toMatchSnapshot();
});
