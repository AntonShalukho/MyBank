import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import {
  withProviders,
  withProvidersDe,
} from "../../../../../../utils/test-utils";
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
    expect(span).toHaveTextContent("0:30");
  });
});

describe("Rendering SmsFormTimer component with not expired code DE", () => {
  beforeEach(() => {
    withProvidersDe(
      <SmsFormTimer isExpiredMap={{ isCodeExpired, SetIsCodeExpired }} />
    );
  });

  it("Rendering timer", () => {
    const timer = document.querySelector(".sms_timer");

    expect(timer).toBeInTheDocument();
    expect(timer).not.toBeEmptyDOMElement();
    expect(timer).toHaveTextContent(/Sie können einen Code erneut senden in/);

    const span = document.querySelector(".sms_timer");

    expect(span).toBeInTheDocument();
    if (span !== null) {
      expect(timer).toContainElement(span as HTMLSpanElement);
    }
    expect(span).toHaveTextContent("0:30");
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

describe("Rendering SmsFormTimer component with not expired code DE", () => {
  beforeEach(() => {
    withProvidersDe(
      <SmsFormTimer isExpiredMap={{ isCodeExpired: true, SetIsCodeExpired }} />
    );
  });

  it("Rendering timer", () => {
    const sendingCodeMessage = document.querySelector(".code_sending");

    expect(sendingCodeMessage).toBeInTheDocument();
    expect(sendingCodeMessage).not.toBeEmptyDOMElement();
    expect(sendingCodeMessage).toHaveTextContent(
      "Der gesendete Code ist abgelaufen"
    );
  });
});
