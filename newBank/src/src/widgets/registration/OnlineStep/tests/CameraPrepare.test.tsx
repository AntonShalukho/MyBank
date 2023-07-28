import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { CameraPrepare } from "../components/CameraPrepare";

const callback = jest.fn();

describe("Rendering CameraPrepare component", () => {
  beforeEach(() => {
    withProviders(<CameraPrepare handleClick={callback} />);
  });

  it("Rendering CameraPrepare container", () => {
    const wrapper = document.querySelector(".container");
    const header = screen.getByRole("heading", { level: 1 });
    const subHeader = screen.getByRole("heading", { level: 2 });

    expect(wrapper).toBeInTheDocument();
    expect(header).toBeInTheDocument();
    expect(subHeader).toBeInTheDocument();

    expect(wrapper).toContainElement(header);
    expect(wrapper).toContainElement(subHeader);
  });

  it("Check headers", () => {
    const header = screen.getByRole("heading", { level: 1 });
    const subHeader = screen.getByRole("heading", { level: 2 });

    expect(header).toHaveTextContent("Sign up");
    expect(subHeader).toHaveTextContent(widgetEn.widget_cameraMessage);
  });

  it("Get snapshot", () => {
    const wrapper = document.querySelector(".container");

    expect(wrapper).toMatchSnapshot();
  });
});
