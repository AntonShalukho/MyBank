import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../utils/test-utils";

import { SingUpStepOne } from ".";

describe("Rendering SingUpStepOne component", () => {
  beforeEach(() => {
    withProviders(<SingUpStepOne />);
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".container");
    const cardContainer = document.querySelector(".card_container");
    const title = screen.getByRole("heading", { level: 1 });
    const subTitle = screen.getByRole("heading", { level: 2 });
    const button = screen.getByRole("button");

    expect(wrapper).toBeInTheDocument();

    expect(wrapper).toContainElement(cardContainer as HTMLDivElement);
    expect(wrapper).toContainElement(title as HTMLHeadingElement);
    expect(wrapper).toContainElement(subTitle as HTMLHeadingElement);
    expect(wrapper).toContainElement(button as HTMLButtonElement);
  });

  it("Rendering components Headers", () => {
    const title = screen.getByRole("heading", { level: 1 });
    const subTitle = screen.getByRole("heading", { level: 2 });

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();

    expect(title).toHaveTextContent("Sign up");
    expect(subTitle).toHaveTextContent(
      "Good morning, you are about to registrate with BeeBank."
    );

    expect(title).toHaveClass("title");
    expect(subTitle).toHaveClass("sub_title");
  });

  it("Rendering cards container", () => {
    const cardContainer = document.querySelector(".card_container");

    expect(cardContainer).not.toBeEmptyDOMElement();
  });

  it("Rendering button", () => {
    const button = screen.getByRole("button");

    expect(button).toHaveClass("primarySmall button");
    expect(button).toHaveTextContent("Continue");
  });
});
