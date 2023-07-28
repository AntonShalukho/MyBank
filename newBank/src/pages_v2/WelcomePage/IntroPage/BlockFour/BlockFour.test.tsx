import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../utils/test-utils";

import { BlockFour } from ".";

describe("Rendering BlockFour component", () => {
  beforeEach(() => {
    withProviders(<BlockFour />);
  });

  it("Rendering all elements", () => {
    const list = document.querySelector(".list");
    const item = document.querySelector(".item");

    expect(list).toBeInTheDocument();
    expect(item).toBeInTheDocument();
  });

  it("Checking list", () => {
    const list = screen.getByRole("list");
    expect(list).toHaveAttribute("class", "list");
  });

  it("Checking items", () => {
    const items = document.querySelectorAll(".item");
    expect(items).toHaveLength(2);
  });

  it("BlockFour snapshot", () => {
    withProviders(<BlockFour />);
    expect(BlockFour).toMatchSnapshot();
  });
});
