import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { ContentWithoutCamera } from "../components/ContentWithoutCamera";

const handleClose = jest.fn();

describe("Rendering ContentWithoutCamera  component", () => {
  beforeEach(() => {
    withProviders(<ContentWithoutCamera onClose={handleClose} />);
  });

  it("Rendering main wrapper ofContentWithoutCamera component", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toBeInTheDocument();
  });

  it("Rendering title", () => {
    const title = screen.getByText(widgetEn.widget_withoutCamera);

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("title");
  });

  it("Rendering description", () => {
    const description = screen.getByText(widgetEn.widget_withoutCameraOptions);

    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("description");
  });

  it("Rendering block with buttons", () => {
    const wrapper = document.querySelector(".wrapper_button");

    expect(wrapper).toBeInTheDocument();
  });

  it("Rendering button elements", () => {
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("Continue offline");
    expect(buttons[0]).toHaveClass("primarySmall");
    expect(buttons[1]).toHaveTextContent("Cancel");
    expect(buttons[1]).toHaveClass("secondarySmall");
  });

  it("Get snapshot", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toMatchSnapshot();
  });
});
