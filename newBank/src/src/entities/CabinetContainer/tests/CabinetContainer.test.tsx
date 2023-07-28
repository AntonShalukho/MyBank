import "@testing-library/jest-dom";
import { withProviders } from "src/shared/lib/test-utils";

import {
  deleteSessionStorage,
  setSessionStorage,
} from "src/shared/lib/sessionStorageHandler";

import { CabinetContainer } from "..";

describe("Rendering CabinetPage component", () => {
  it("Rendering auth header inside", () => {
    setSessionStorage("token", "token");

    const { container } = withProviders(<CabinetContainer />);
    const authHeader = document.querySelector(".wrapper");

    expect(container).toContainElement(authHeader as HTMLDivElement);
  });

  it("Rendering non auth header inside", () => {
    deleteSessionStorage("token");

    const { container } = withProviders(<CabinetContainer />);
    const header = document.querySelector(".wrapper_without_auth");

    expect(container).toContainElement(header as HTMLDivElement);
  });

  it("Get snapshot with non auth header", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toMatchSnapshot();
  });

  it("Get snapshot with auth header", () => {
    setSessionStorage("token", "token");
    const { container } = withProviders(<CabinetContainer />);

    expect(container).toMatchSnapshot();
  });
});
