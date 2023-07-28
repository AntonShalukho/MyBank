import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../../utils/test-utils";

import { InfoBlock } from ".";

describe("Rendering InfoBlock component", () => {
  beforeEach(() => {
    withProviders(
      <InfoBlock
        title="openAccountThirdWord"
        titleDesc="listOfAccountMoreInfo"
        buttonDesc="listOfAccountDropDownCurrent"
        titleFontSize={true}
      />
    );
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".description");
    const title = document.querySelector(".title");
    const titleDesc = document.querySelector(".title_desc");
    const button = screen.getByRole("button");

    expect(wrapper).toBeInTheDocument();
    expect(wrapper).not.toBeEmptyDOMElement();
    expect(wrapper).toContainElement(title as HTMLDivElement);
    expect(wrapper).toContainElement(titleDesc as HTMLDivElement);
    expect(wrapper).toContainElement(button as HTMLButtonElement);
  });

  it("Rendering components title block", () => {
    const title = document.querySelector(".title");

    expect(title).toHaveTextContent("Account");
  });

  it("Rendering components title_desc block", () => {
    const titleDesc = document.querySelector(".title_desc");

    expect(titleDesc).toHaveTextContent("Find more information");
  });

  it("Rendering components button", () => {
    const button = screen.getByRole("button");

    expect(button).toHaveTextContent("Current account");
    expect(button).toHaveClass("primarySmall button ");
  });
});
