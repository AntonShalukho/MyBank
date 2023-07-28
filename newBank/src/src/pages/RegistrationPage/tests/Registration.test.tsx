import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { RegistrationPage } from "..";

describe("Rendering RegistrationPage component", () => {
  beforeEach(() => {
    withProviders(<RegistrationPage />);
  });

  it("Get snapshot", () => {
    const container = document.querySelector(".container");

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
