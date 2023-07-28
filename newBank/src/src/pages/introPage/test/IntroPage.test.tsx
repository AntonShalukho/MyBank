import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { IntroPage } from "..";

describe("Rendering IntroPage component", () => {
  beforeEach(() => {
    withProviders(<IntroPage />);
  });

  it("Get snapshot", () => {
    const container = document.querySelector(".container");

    expect(container).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
