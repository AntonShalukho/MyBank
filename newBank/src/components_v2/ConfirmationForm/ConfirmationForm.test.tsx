import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../utils/test-utils";

import { ConfirmationForm } from ".";

const onClose = jest.fn();
const onSuccessResponse = jest.fn();
const resendVerifyCode = jest.fn();

describe("Rendering ConfirmationForm component", () => {
  beforeEach(() => {
    withProviders(
      <ConfirmationForm
        onClose={onClose}
        onSuccessResponse={onSuccessResponse}
        resendVerifyCode={resendVerifyCode}
      />
    );
  });

  it("Rendering main wrapper of ConfirmationForm component", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toBeInTheDocument();
  });

  it("Rendering title", () => {
    const title = screen.getByText("Enter the Security Code");

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("title");
  });

  it("Rendering block with information text", () => {
    const infoBlock = document.querySelector(".inform");

    expect(infoBlock).toBeInTheDocument();
    expect(infoBlock).toHaveTextContent(
      /We’ve sent you the security code to your e-mail address./
    );
    expect(infoBlock).toHaveTextContent(/In order to proceed enter it below./);
  });

  it("Rendering span elements with form information", () => {
    const spans = document.querySelectorAll("span");

    expect(spans).toHaveLength(3);
    expect(spans[0]).toHaveTextContent(
      "We’ve sent you the security code to your e-mail address."
    );
    expect(spans[1]).toHaveTextContent("In order to proceed enter it below.");
    expect(spans[2]).toHaveTextContent("05:00");
    expect(spans[2]).toHaveClass("sms_timer_numbers");
  });

  it("Rendering confirmationBlock element", () => {
    const confirmationBlock = document.querySelector(".confirm_code");

    expect(confirmationBlock).toBeInTheDocument();
    expect(confirmationBlock).not.toBeEmptyDOMElement();
  });

  it("Get snapshot", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toMatchSnapshot();
  });
});
