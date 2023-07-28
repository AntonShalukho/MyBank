import "@testing-library/jest-dom";

import { screen, render } from "@testing-library/react";

import { InfoBlock } from ".";

import { CellPhoneIcon } from "../../Icon";

describe("Rendering InfoBlock component", () => {
  beforeEach(() => {
    render(
      <InfoBlock
        icon={<CellPhoneIcon />}
        phoneNumber="7788"
        description="Working hours: 24/7"
      />
    );
  });

  it("Rendering all elements", () => {
    const wrapper = document.querySelector(".wrapper");
    const icon = document.querySelector(".icon");
    const dataWrapper = document.querySelector(".data_wrapper");
    const number = document.querySelector(".number");
    const description = document.querySelector(".description");

    expect(wrapper).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(dataWrapper).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("Icon element must wrap an icon", () => {
    const icon = document.querySelector(".icon");

    expect(icon).not.toBeEmptyDOMElement();
  });

  it("Rendering phone number", () => {
    const phoneNumber = screen.getByText("7788");

    expect(phoneNumber).toBeInTheDocument();
    expect(phoneNumber).toHaveAttribute("class", "number");
  });

  it("Rendering description", () => {
    const description = document.querySelector(".description");

    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent("Working hours: 24/7");
  });

  it("components snapshot", () => {
    const infoBlock = render(
      <InfoBlock
        icon={<CellPhoneIcon />}
        phoneNumber="7788"
        description="Working hours: 24/7"
      />
    );
    expect(infoBlock).toMatchSnapshot();
  });
});

describe("Rendering InfoBlock component without icon", () => {
  beforeEach(() => {
    render(
      <InfoBlock
        phoneNumber="+48 79 203 32 33"
        description="From 8:00 am to 18:00 pm"
      />
    );
  });

  it("Rendering all elements without icon", () => {
    const wrapper = document.querySelector(".wrapper");
    const dataWrapper = document.querySelector(".data_wrapper");
    const number = document.querySelector(".number");
    const description = document.querySelector(".description");

    expect(wrapper).toBeInTheDocument();
    expect(dataWrapper).toBeInTheDocument();
    expect(number).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("Rendering phone number", () => {
    const phoneNumber = screen.getByText("+48 79 203 32 33");
    expect(phoneNumber).toBeInTheDocument();
    expect(phoneNumber).toHaveAttribute("class", "number");
  });

  it("Rendering description", () => {
    const description = document.querySelector(".description");
    expect(description).toBeInTheDocument();
    expect(description).toHaveTextContent("From 8:00 am to 18:00 pm");
  });

  it("InfoBlock snapshot", () => {
    const infoBlock = render(
      <InfoBlock
        icon={<CellPhoneIcon />}
        phoneNumber="7788"
        description="From 8:00 am to 18:00 pm"
      />
    );
    expect(infoBlock).toMatchSnapshot();
  });
});
