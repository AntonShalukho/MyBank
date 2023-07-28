import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { BlockSeven } from "../index";

describe("Intro Page Block Seven", () => {
  beforeEach(() => {
    withProviders(<BlockSeven />);
  });

  it("Check if parts in document", () => {
    const container = document.querySelector(".container");
    const wrapper = document.querySelector(".wrapper");
    const blockRight = document.querySelector("block_right");
    const blockLeft = document.querySelector("block_left");
    expect(container).toBeInTheDocument;
    expect(wrapper).toBeInTheDocument;
    expect(blockRight).toBeInTheDocument;
    expect(blockLeft).toBeInTheDocument;
  });
});

it("BlockSeven snapshot", () => {
  const blockSeven = withProviders(<BlockSeven />);

  expect(blockSeven).toMatchSnapshot();
});
