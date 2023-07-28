import "@testing-library/jest-dom";

import { withProviders } from "../../../utils/test-utils";

import { LoginPage } from ".";

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
    withProviders(<LoginPage />);
    expect(LoginPage).toMatchSnapshot();
  });
});
