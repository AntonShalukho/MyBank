import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { AnimationBlock } from "..";

describe("Rendering AnimationBlock component", () => {
  beforeEach(() => {
    withProviders(<AnimationBlock />);
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).not.toBeEmptyDOMElement();
  });

  it("Components AnimationBlocks snapshot", () => {
    const container = withProviders(<AnimationBlock />);

    expect(container).toMatchSnapshot();
  });
});
