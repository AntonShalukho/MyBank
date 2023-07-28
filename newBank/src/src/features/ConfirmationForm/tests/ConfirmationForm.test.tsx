import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "src/shared/lib/test-utils";

import { featureEn } from "src/features/assets/translation/featureEn";

import { ConfirmationForm } from "..";

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
    const title = screen.getByText(featureEn.feature_securityCode);

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("title");
  });

  it("Rendering block with information text", () => {
    const infoBlock = document.querySelector(".inform");

    expect(infoBlock).toBeInTheDocument();
    expect(infoBlock).toHaveTextContent(featureEn.feature_subtitleEmail);
    expect(infoBlock).toHaveTextContent(featureEn.feature_proceedMessage);
  });

  it("Rendering span elements with form information", () => {
    const spans = document.querySelectorAll("span");

    expect(spans).toHaveLength(3);
    expect(spans[0]).toHaveTextContent(featureEn.feature_subtitleEmail);
    expect(spans[1]).toHaveTextContent(featureEn.feature_proceedMessage);
    expect(spans[2]).toHaveTextContent("05:00");
    expect(spans[2]).toHaveClass("email_timer_numbers");
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
