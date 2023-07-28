import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "../../../utils/test-utils";

import { SmsFormTimer } from ".";

const isCodeExpired = false;
const SetIsCodeExpired = jest.fn();

describe("Rendering SmsFormTimer component with not expired code EN", () => {
  beforeEach(() => {
    withProviders(
      <SmsFormTimer isExpiredMap={{ isCodeExpired, SetIsCodeExpired }} />
    );
  });

  it("Rendering timer", () => {
    const timer = document.querySelector(".sms_timer");

    expect(timer).toBeInTheDocument();
    expect(timer).not.toBeEmptyDOMElement();
    expect(timer).toHaveTextContent(/You can resend a code in/);

    const span = document.querySelector(".sms_timer");

    expect(span).toBeInTheDocument();
    if (span !== null) {
      expect(timer).toContainElement(span as HTMLSpanElement);
    }
    expect(span).toHaveTextContent("05:00");
  });
});

describe("Rendering SmsFormTimer component with expired code EN", () => {
  beforeEach(() => {
    withProviders(
      <SmsFormTimer isExpiredMap={{ isCodeExpired: true, SetIsCodeExpired }} />
    );
  });

  it("Rendering timer", () => {
    const sendingCodeMessage = document.querySelector(".code_sending");

    expect(sendingCodeMessage).toBeInTheDocument();
    expect(sendingCodeMessage).not.toBeEmptyDOMElement();
    expect(sendingCodeMessage).toHaveTextContent("The sent code has expired");
  });
});
