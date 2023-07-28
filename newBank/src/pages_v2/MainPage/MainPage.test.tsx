import "@testing-library/jest-dom";
import { withProviders } from "../../utils/test-utils";
import { MainPage } from ".";

describe("Rendering MainPage component", () => {
  beforeEach(() => {
    withProviders(<MainPage />);
  });

  it("Get snapshot", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toMatchSnapshot();
  });
});
