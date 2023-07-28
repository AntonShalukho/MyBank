import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "../../utils/test-utils";

import { Scrollbar } from ".";

const ChildrenComponent = () => (
  <div className="scrollbar">Hello I am Scrollbar Children Component</div>
);

describe("Scrollbar Rendering", () => {
  beforeEach(() =>
    withProviders(
      <Scrollbar>
        <ChildrenComponent />
      </Scrollbar>
    )
  );

  it("Render Scrollbar component", () => {
    const scrollbarWrapper = document.querySelector(".scroll_wrap");
    const scrollChildren = document.querySelector(".scroll_children");
    const scroll = document.querySelector(".scroll");
    const scrollThumb = document.querySelector(".scroll_thumb");

    expect(scrollbarWrapper).toBeInTheDocument();
    expect(scrollbarWrapper).not.toBeEmptyDOMElement();

    expect(scrollChildren).toBeInTheDocument();
    expect(scrollChildren).not.toBeEmptyDOMElement();

    expect(scroll).toBeInTheDocument();
    expect(scroll).not.toBeEmptyDOMElement();

    expect(scrollThumb).toBeInTheDocument();
  });

  it("Rendering child component", () => {
    const childrenComponent = document.querySelector(".scrollbar");

    expect(childrenComponent).toBeInTheDocument();
    expect(childrenComponent).toHaveTextContent(
      "Hello I am Scrollbar Children Component"
    );
  });

  it("Check snapshot", () => {
    const scrollbar = withProviders(
      <Scrollbar>
        <ChildrenComponent />
      </Scrollbar>
    );

    expect(scrollbar).toMatchSnapshot();
  });
});
