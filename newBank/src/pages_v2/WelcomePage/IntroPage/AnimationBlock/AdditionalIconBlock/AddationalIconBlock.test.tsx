import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../../utils/test-utils";

import { AdditionalIconBlock } from ".";

describe("Rendering AdditionalIconBlock component", () => {
  beforeEach(() => {
    withProviders(
      <AdditionalIconBlock description="Hello I'm description">
        <h1>Hello I am children</h1>
      </AdditionalIconBlock>
    );
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).not.toBeEmptyDOMElement();
  });
  it("Rendering components icon block", () => {
    const icon = document.querySelector(".icon");
    const header = screen.getByRole("heading", { level: 1 });

    expect(icon).toBeInTheDocument();

    expect(header).toBeInTheDocument();
    expect(header).toHaveTextContent("Hello I am children");

    expect(icon).toContainElement(header as HTMLHeadingElement);
  });
  it("Rendering component wrapper", () => {
    const description = document.querySelector(".description");

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent("Hello I'm description");
  });
});
