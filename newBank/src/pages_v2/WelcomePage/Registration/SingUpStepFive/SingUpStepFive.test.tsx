import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "../../../../utils/test-utils";

import { SingUpStepFive } from ".";

describe("Rendering SingUpStepFive component", () => {
  beforeEach(() => {
    withProviders(<SingUpStepFive />);
  });

  it("Rendering basic structure of component", () => {
    const container = document.querySelector(".container");
    const step = document.querySelector(".sub_title");

    expect(container).toBeInTheDocument();
    expect(container).not.toBeEmptyDOMElement();

    expect(step).toBeInTheDocument();
    expect(step).toHaveTextContent("Please prepare for using the camera");
    expect(container).toContainElement(step as HTMLHeadElement);
  });

  it("SnapShot of SingUpStepFive component", () => {
    const container = withProviders(<SingUpStepFive />);

    expect(container).toMatchSnapshot();
  });
});
