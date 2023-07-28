import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../shared/lib/test-utils";

import { ContactDropDown } from "..";

const handleDropDown = jest.fn();

describe("Rendering ContactDropDown component", () => {
  beforeEach(() => {
    withProviders(<ContactDropDown handleDropDown={handleDropDown} />);
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".wrapper");
    const top = document.querySelector(".top");
    const dr = document.querySelector(".dr");
    const bottom = document.querySelector(".bottom");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).toContainElement(top as HTMLDivElement);
    expect(wrapper).toContainElement(dr as HTMLDivElement);
    expect(wrapper).toContainElement(bottom as HTMLDivElement);
  });

  it("Rendering Tops block", () => {
    const topWrapper = document.querySelector(".top");
    const topHeader = document.querySelector(".top_header");
    const topTitle = document.querySelector(".top_title");
    const topContent = document.querySelector(".top_content");
    const image = screen.getByAltText("phone");

    expect(topWrapper).toBeInTheDocument();

    expect(topHeader).toBeInTheDocument();
    expect(topHeader).toContainElement(topTitle as HTMLDivElement);

    expect(topTitle).toBeInTheDocument();
    expect(topTitle).toHaveTextContent("Our phones");
    expect(topHeader).toContainElement(image as HTMLImageElement);

    expect(topContent).toBeInTheDocument();

    expect(image).toBeInTheDocument();
  });

  it("Rendering components bottom", () => {
    const bottomWrapper = document.querySelector(".bottom");
    const bottomHeader = document.querySelector(".bottom_header");
    const topContent = bottomWrapper?.querySelector(".top_content");
    const online = document.querySelector(".online");
    const onlineField = document.querySelector(".online_field");
    const contactWrapper = document.querySelector(".contactWrapper");

    expect(bottomWrapper).toBeInTheDocument();
    expect(bottomWrapper).toContainElement(bottomHeader as HTMLDivElement);
    expect(bottomWrapper).toContainElement(topContent as HTMLDivElement);

    expect(topContent as HTMLDivElement).toBeInTheDocument();
    expect(bottomWrapper).toContainElement(online as HTMLDivElement);
    expect(bottomWrapper).toContainElement(onlineField as HTMLDivElement);
    expect(bottomWrapper).toContainElement(contactWrapper as HTMLDivElement);
  });

  it("Click button check", () => {
    const cross = screen.getByRole("button");
    cross.click();
    expect(handleDropDown).toBeCalled();
  });

  it("Get snapshot", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toMatchSnapshot();
  });
});
