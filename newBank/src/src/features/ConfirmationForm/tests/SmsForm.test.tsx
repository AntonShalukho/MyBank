import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { EmailForm } from "../components/EmailForm";

const onClose = jest.fn();
const handleSuccessResponse = jest.fn();
const resendVerifyCode = jest.fn();

describe("Rendering EmailForm component EN", () => {
  beforeEach(() =>
    withProviders(
      <EmailForm
        onClose={onClose}
        onSuccessResponse={handleSuccessResponse}
        resendVerifyCode={resendVerifyCode}
      />
    )
  );

  it("Rendering form element", () => {
    const form = document.querySelector(".email_form");

    expect(form).toBeInTheDocument();
  });

  it("Rendering block with inputs", () => {
    const inputsBlock = document.querySelector(".inputs");
    const inputs = screen.getAllByRole("textbox");

    expect(inputsBlock).toBeInTheDocument();
    expect(inputsBlock).not.toBeEmptyDOMElement();
    expect(inputs).toHaveLength(6);
  });

  it("Rendering timer element", () => {
    const timer = document.querySelector(".wrapper");

    expect(timer).toBeInTheDocument();
  });

  it("Rendering block with buttons", () => {
    const wrapper = document.querySelector(".button_group");

    expect(wrapper).toBeInTheDocument();

    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
    expect(buttons[0]).toHaveTextContent("Confirm");
    expect(buttons[1]).toHaveTextContent("Cancel");
  });

  it("Get snapshot", () => {
    const wrapper = document.querySelector(".email_form");

    expect(wrapper).toMatchSnapshot();
  });
});
