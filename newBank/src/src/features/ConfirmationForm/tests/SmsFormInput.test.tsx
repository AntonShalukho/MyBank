import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import { withProviders } from "../../../../utils/test-utils";

import { EmailFormInput } from "../components/EmailFormInput";

const handleVerificationCode = jest.fn((value: string) => {});

const handleVerificationCodeBack = jest.fn(
  (e: React.KeyboardEvent<HTMLInputElement>) => {}
);

const handlePaste = jest.fn((e: React.ClipboardEvent<HTMLInputElement>) => {});

describe("Rendering EmailFormInput component without error", () => {
  beforeEach(() => {
    withProviders(
      <EmailFormInput
        handleVerificationCode={handleVerificationCode}
        handleVerificationCodeBack={handleVerificationCodeBack}
        handlePaste={handlePaste}
        name="input"
        id="input"
        formikValue=""
        isErrors={false}
        isActive={true}
      />
    );
  });

  it("Rendering input element", () => {
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("input");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "input");
    expect(input).toHaveAttribute("id", "input");
    expect(input).toHaveAttribute("value", "");
  });
});

describe("Rendering EmailFormInput component with error", () => {
  beforeEach(() => {
    withProviders(
      <EmailFormInput
        handleVerificationCode={handleVerificationCode}
        handleVerificationCodeBack={handleVerificationCodeBack}
        handlePaste={handlePaste}
        name="name"
        id="id"
        formikValue="value"
        isErrors={true}
        isActive={true}
      />
    );
  });

  it("Rendering input element", () => {
    const input = screen.getByRole("textbox");

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("input input__error");
    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("name", "name");
    expect(input).toHaveAttribute("id", "id");
    expect(input).toHaveAttribute("value", "value");
  });

  it("Get snapshot", () => {
    const input = screen.getByRole("textbox");

    expect(input).toMatchSnapshot();
  });
});
