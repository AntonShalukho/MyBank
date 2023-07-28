import React from "react";

import "@testing-library/jest-dom";

import { withProviders } from "src/shared/lib/test-utils";

import { featureEn } from "src/features/assets/translation/featureEn";

import { EmailFormTimer } from "../components/EmailFormTimer";

const isCodeExpired = false;
const SetIsCodeExpired = jest.fn();

describe("Rendering EmailFormTimer component with not expired code EN", () => {
  beforeEach(() => {
    withProviders(
      <EmailFormTimer isExpiredMap={{ isCodeExpired, SetIsCodeExpired }} />
    );
  });

  it("Rendering timer", () => {
    const timer = document.querySelector(".email_timer");

    expect(timer).toBeInTheDocument();
    expect(timer).not.toBeEmptyDOMElement();
    expect(timer).toHaveTextContent(featureEn.feature_resendCode);

    const span = document.querySelector(".email_timer");

    expect(span).toBeInTheDocument();
    if (span !== null) {
      expect(timer).toContainElement(span as HTMLSpanElement);
    }
    expect(span).toHaveTextContent("05:00");
  });
});

describe("Rendering EmailFormTimer component with expired code EN", () => {
  beforeEach(() => {
    withProviders(
      <EmailFormTimer
        isExpiredMap={{ isCodeExpired: true, SetIsCodeExpired }}
      />
    );
  });

  it("Rendering timer", () => {
    const sendingCodeMessage = document.querySelector(".code_sending");

    expect(sendingCodeMessage).toBeInTheDocument();
    expect(sendingCodeMessage).not.toBeEmptyDOMElement();
    expect(sendingCodeMessage).toHaveTextContent(featureEn.feature_expiredCode);
  });
});
