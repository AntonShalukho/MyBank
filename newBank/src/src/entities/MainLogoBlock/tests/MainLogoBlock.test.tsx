import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import {
  deleteSessionStorage,
  setSessionStorage,
} from "src/shared/lib/sessionStorageHandler";

import { MainLogoBlock } from "..";

describe("Rendering MainLogoBlock component with token", () => {
  it("Rendering MainLogo wrapper", () => {
    withProviders(<MainLogoBlock isSidebarOpen={true} className="mainLogo" />);
    const wrapper = document.querySelector(".wrapper");
    const icon = document.querySelector(".icon");
    const wrapperDescription = document.querySelector(".wrapper_description");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toHaveClass("wrapper mainLogo");

    expect(icon).toBeInTheDocument();
    expect(wrapperDescription).toBeInTheDocument();

    expect(wrapper).toContainElement(wrapperDescription as HTMLDivElement);
    expect(wrapper).toContainElement(icon as HTMLElement);
  });

  it("Rendering wrapper_description by provided isSidebarOpen={true}", () => {
    setSessionStorage("token", "token");
    withProviders(<MainLogoBlock isSidebarOpen={true} className="mainLogo" />);
    const wrapperDescription = document.querySelector(".wrapper_description");
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(wrapperDescription).toContainElement(title as HTMLSpanElement);
    expect(wrapperDescription).toContainElement(description as HTMLSpanElement);

    expect(wrapperDescription).toHaveClass("wrapper_description mainLogo");

    expect(title).toHaveTextContent("Bee·Bank");
    expect(title).toHaveClass("title");
    expect(title).not.toHaveClass("header_title");

    expect(description).toHaveTextContent("Solutions for life.");
    expect(description).toHaveClass("description");
    expect(description).not.toHaveClass("header_description");
  });

  it("Rendering wrapperDescription with isSidebarOpen={false}", () => {
    withProviders(<MainLogoBlock isSidebarOpen={false} className="mainLogo" />);

    const wrapper = document.querySelector(".wrapper");
    const wrapperDescription = document.querySelector(".wrapper_description");

    expect(wrapperDescription).toBeFalsy();
    expect(wrapper).not.toContainElement(wrapperDescription as HTMLDivElement);

    expect(wrapper).toMatchSnapshot();
  });

  it("Get snapshot", () => {
    withProviders(<MainLogoBlock isSidebarOpen={true} className="mainLogo" />);
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toMatchSnapshot();
  });
});

describe("Rendering MainLogoBlock component without token", () => {
  it("Rendering without token", () => {
    deleteSessionStorage("token");
    withProviders(<MainLogoBlock isSidebarOpen={true} className="mainLogo" />);
    const title = document.querySelector(".title");
    const description = document.querySelector(".description");

    expect(title).toHaveClass("title header_title");
    expect(description).toHaveClass("description header_description");
  });
});
