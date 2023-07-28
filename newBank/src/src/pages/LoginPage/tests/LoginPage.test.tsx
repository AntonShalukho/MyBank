import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { LoginPage } from "..";

describe("Rendering BlockThree component", () => {
  beforeEach(() => {
    withProviders(<LoginPage />);
  });

  it("Rendering all elements", () => {
    const wrapper = document.querySelector(".wrapper");
    const block = document.querySelector(".block");

    expect(wrapper).toBeInTheDocument();
    expect(block).toBeInTheDocument();
  });

  it("LoginPageForm snapshot", () => {
    const loginPage = withProviders(<LoginPage />);
    expect(loginPage).toMatchSnapshot();
  });
});
