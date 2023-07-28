import "@testing-library/jest-dom";
import { withProviders } from "../../utils/test-utils";
import { CabinetPage } from ".";

describe("Rendering CabinetPage component", () => {
  beforeEach(() => {
    withProviders(<CabinetPage />);
  });

  it("Get snapshot", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toMatchSnapshot();
  });
});
