/* eslint-disable react/react-in-jsx-scope */
import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { Socials } from "../components/Socials";

describe("Rendering InfoCard component", () => {
  beforeEach(() => {
    withProviders(<Socials />);
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
    expect(items).toHaveLength(5);
  });

  it("Socials snapshot", () => {
    const socials = withProviders(<Socials />);
    expect(socials).toMatchSnapshot();
  });
});
