import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "../../utils/test-utils";

import { WelcomePage } from ".";

describe("Rendering WelcomePage component", () => {
  beforeEach(() => {
    withProviders(<WelcomePage />);
  });

  it("Get snapshot", () => {
    const container = document.querySelector(".container");

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
