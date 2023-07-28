import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import {
  withProviders,
  withProvidersDe,
} from "../../../../../utils/test-utils";

import { ConfirmationBlock } from ".";

const closeConfirmation = jest.fn();
const handleErrorSubmit = jest.fn();
const accountFormValue = {
  bankProductName: "",
  accountName: "",
  currency: {
    name: "",
  },
  verifyCode: "",
};

describe("Rendering ConfirmationBlock component", () => {
  beforeEach(() => {
    withProviders(
      <ConfirmationBlock
        closeConfirmation={closeConfirmation}
        handleErrorSubmit={handleErrorSubmit}
        accountFormValue={accountFormValue}
      />
    );
  });

  it("Rendering main wrapper of ConfirmationBlock component", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toBeInTheDocument();
  });

  it("Rendering title", () => {
    const title = screen.getByText("Enter the Telegram code");

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("title");
  });

  it("Rendering block with information text", () => {
    const infoBlock = document.querySelector(".inform");

    expect(infoBlock).toBeInTheDocument();
    expect(infoBlock).toHaveTextContent(
      /We’ve sent you the telegram code in the chat-bot./
    );
    expect(infoBlock).toHaveTextContent(/In order to proceed enter it below./);
  });

  it("Rendering span elements with form information", () => {
    const spans = document.querySelectorAll("span");

    expect(spans).toHaveLength(3);
    expect(spans[0]).toHaveTextContent(
      "We’ve sent you the telegram code in the chat-bot."
    );
    expect(spans[1]).toHaveTextContent("In order to proceed enter it below.");
    expect(spans[2]).toHaveTextContent("0:30");
    expect(spans[2]).toHaveClass("sms_timer_numbers");
  });

  it("Rendering confirmationBlock element", () => {
    const confirmationBlock = document.querySelector(".confirm_code");

    expect(confirmationBlock).toBeInTheDocument();
    expect(confirmationBlock).not.toBeEmptyDOMElement();
  });
});

describe("Rendering ConfirmationBlock component in De", () => {
  beforeEach(() => {
    withProvidersDe(
      <ConfirmationBlock
        closeConfirmation={closeConfirmation}
        handleErrorSubmit={handleErrorSubmit}
        accountFormValue={accountFormValue}
      />
    );
  });

  it("Rendering main wrapper of ConfirmationBlock component", () => {
    const wrapper = document.querySelector(".wrapper");

    expect(wrapper).toBeInTheDocument();
  });

  it("Rendering title", () => {
    const title = screen.getByText("Geben Sie den Telegrammcode ein");

    expect(title).toBeInTheDocument();
    expect(title).toHaveClass("title");
  });

  it("Rendering block with information text", () => {
    const infoBlock = document.querySelector(".inform");

    expect(infoBlock).toBeInTheDocument();
    expect(infoBlock).toHaveTextContent(
      /Wir haben Ihnen den Telegrammcode im Chat-Bot gesendet./
    );
    expect(infoBlock).toHaveTextContent(
      /Um fortzufahren, geben Sie es unten ein./
    );
  });

  it("Rendering span elements with form information", () => {
    const spans = document.querySelectorAll("span");

    expect(spans).toHaveLength(3);
    expect(spans[0]).toHaveTextContent(
      "Wir haben Ihnen den Telegrammcode im Chat-Bot gesendet."
    );
    expect(spans[1]).toHaveTextContent(
      "Um fortzufahren, geben Sie es unten ein."
    );
    expect(spans[2]).toHaveTextContent("0:30");
    expect(spans[2]).toHaveClass("sms_timer_numbers");
  });

  it("Rendering confirmationBlock element", () => {
    const confirmationBlock = document.querySelector(".confirm_code");

    expect(confirmationBlock).toBeInTheDocument();
    expect(confirmationBlock).not.toBeEmptyDOMElement();
  });
});
