import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../../utils/test-utils";

import { AnimationTop } from ".";

describe("Rendering AnimationTop component", () => {
  beforeEach(() => {
    withProviders(<AnimationTop />);
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".wrapper");
    const top = screen.getByRole("top");
    const bottom = screen.getByRole("bottom");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).not.toBeEmptyDOMElement();
    expect(wrapper).toContainElement(top as HTMLDivElement);
    expect(wrapper).toContainElement(bottom as HTMLDivElement);
  });

  it("Rendering components top block", () => {
    const top = screen.getByRole("top");
    const info = document.querySelector(".info");
    const icon = document.querySelector(".icon");
    const browser = document.querySelector(".browser");
    const video = document.querySelector(".video");

    expect(top).toContainElement(info as HTMLDivElement);
    expect(top).toContainElement(icon as HTMLDivElement);
    expect(top).toContainElement(browser as SVGSVGElement);
    expect(top).toContainElement(video as HTMLVideoElement);
  });

  it("Rendering components bottom block", () => {
    const bottom = screen.getByRole("bottom");
    const images = screen.getAllByRole("img");

    expect(images).toHaveLength(2);
    expect(images[0]).toBeInTheDocument();
    expect(images[1]).toBeInTheDocument();

    expect(bottom).toContainElement(images[0] as HTMLImageElement);
    expect(bottom).toContainElement(images[1] as HTMLImageElement);
  });
});
