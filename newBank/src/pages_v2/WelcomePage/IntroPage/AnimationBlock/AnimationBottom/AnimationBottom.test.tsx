import "@testing-library/jest-dom";

import { withProviders } from "../../../../../utils/test-utils";

import { AnimationBottom } from ".";

describe("Rendering AnimationBottom component", () => {
  beforeEach(() => {
    withProviders(<AnimationBottom />);
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".wrapper");
    const icon = document.querySelector(".icon");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).not.toBeEmptyDOMElement();
    expect(wrapper).toContainElement(icon as HTMLDivElement);
  });

  it("Rendering InfoBlock component", () => {
    const wrapper = document.querySelector(".wrapper");
    const description = document.querySelector(".description");

    expect(wrapper).toContainElement(description as HTMLDivElement);
  });
});
