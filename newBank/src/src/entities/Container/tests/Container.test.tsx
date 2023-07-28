import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import {
  deleteSessionStorage,
  setSessionStorage,
} from "src/shared/lib/sessionStorageHandler";

import { Container } from "..";

describe("Rendering CabinetPage component", () => {
  it("Rendering auth container with sidebar", () => {
    setSessionStorage("token", "token");

    withProviders(<Container isFolded={true}>I'am children</Container>);
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toHaveClass("wrapper wrapper_folded wrapper_auth");
    expect(wrapper).toHaveTextContent("I'am children");

    expect(wrapper).toMatchSnapshot();
  });

  it("Rendering non auth container with sidebar", () => {
    deleteSessionStorage("token");

    withProviders(<Container isFolded={true}>I'am children</Container>);
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toHaveClass("wrapper wrapper_folded wrapper_not_auth");
    expect(wrapper).toHaveTextContent("I'am children");

    expect(wrapper).toMatchSnapshot();
  });

  it("Rendering auth header inside", () => {
    setSessionStorage("token", "token");

    withProviders(<Container isFolded={false}>I'am children</Container>);
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toHaveClass("wrapper wrapper_auth");
    expect(wrapper).toHaveTextContent("I'am children");

    expect(wrapper).toMatchSnapshot();
  });

  it("Rendering non auth header inside", () => {
    deleteSessionStorage("token");

    withProviders(<Container isFolded={false}>I'am children</Container>);
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toHaveClass("wrapper wrapper_not_auth");
    expect(wrapper).toHaveTextContent("I'am children");

    expect(wrapper).toMatchSnapshot();
  });
});
