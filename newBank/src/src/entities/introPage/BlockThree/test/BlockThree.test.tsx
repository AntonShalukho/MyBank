import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { BlockThree } from "..";

describe("Rendering BlockThree component", () => {
  beforeEach(() => {
    withProviders(<BlockThree />);
  });

  it("Rendering all elements", () => {
    const wrapper = document.querySelector(".wrapper");
    const block = document.querySelector(".block");
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const imageWrapper = document.querySelector(".imageWrapper");

    expect(wrapper).toBeInTheDocument();
    expect(block).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(imageWrapper).toBeInTheDocument();
  });

  it("render with descendants", () => {
    const wrapper = document.querySelector(".wrapper");
    const block = document.querySelector(".block");
    const title = document.querySelector(".title");
    const subtitle = document.querySelector(".subtitle");
    const imageWrapper = document.querySelector(".imageWrapper");
    const image = document.querySelector(".image");

    expect(wrapper).toContainElement(block as HTMLElement);
    expect(block).toContainElement(title as HTMLElement);
    expect(block).toContainElement(subtitle as HTMLElement);
    expect(block).toContainElement(imageWrapper as HTMLElement);
    expect(imageWrapper).toContainElement(image as SVGAElement);
  });

  it("BlockThree snapshot", () => {
    const blockThree = withProviders(<BlockThree />);
    expect(blockThree).toMatchSnapshot();
  });
});
