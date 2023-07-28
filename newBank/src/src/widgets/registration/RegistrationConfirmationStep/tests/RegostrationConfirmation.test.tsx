import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { widgetEn } from "src/widgets/assets/translation/widgetsEn";

import { RegistrationConfirmationStep } from "..";

describe("Rendering RegistrationConfirmation component", () => {
  beforeEach(() => {
    withProviders(<RegistrationConfirmationStep />);
  });

  it("Rendering components wrapper", () => {
    const wrapper = document.querySelector(".wrapper");
    const buttonContainer = document.querySelector(".button_container");
    const title = screen.getByRole("heading", { level: 1 });
    const subTitle = screen.getByRole("heading", { level: 2 });

    expect(wrapper).toBeInTheDocument();

    expect(wrapper).toContainElement(buttonContainer as HTMLDivElement);
    expect(wrapper).toContainElement(title as HTMLHeadingElement);
    expect(wrapper).toContainElement(subTitle as HTMLHeadingElement);
  });

  it("Rendering components Headers", () => {
    const title = screen.getByRole("heading", { level: 1 });
    const subTitle = screen.getByRole("heading", { level: 2 });

    expect(title).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();

    expect(title).toHaveTextContent("Sign up");
    expect(subTitle).toHaveTextContent(
      widgetEn.widget_registrationConfirmation
    );

    expect(title).toHaveClass("title");
    expect(subTitle).toHaveClass("sub_title");
  });

  it("Rendering buttons", () => {
    const buttonContainer = document.querySelector(".button_container");
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);

    expect(buttons[0]).toHaveTextContent("Agree");
    expect(buttons[1]).toHaveTextContent("Cancel");

    expect(buttons[0]).toHaveClass("primarySmall button");
    expect(buttons[1]).toHaveClass("secondarySmall button");

    expect(buttonContainer).toContainElement(buttons[0] as HTMLButtonElement);
    expect(buttonContainer).toContainElement(buttons[1] as HTMLButtonElement);
  });

  it("Get snapshot", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toMatchSnapshot();
  });
});
