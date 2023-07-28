import React from "react";

import "@testing-library/jest-dom";

import {
  screen,
  render,
  act,
  fireEvent,
  waitFor,
} from "@testing-library/react";

import { IntlProvider } from "react-intl";

import { localeContent } from "translation/languages";

import { Form, Formik } from "formik";

import userEvent from "@testing-library/user-event";

import { Input } from ".";

const Wrapper = (Component: React.ReactElement) => (
  <IntlProvider
    locale="en-us"
    defaultLocale="en"
    messages={localeContent["en-us"]}
  >
    <Formik
      initialValues={{
        example: "",
      }}
      onSubmit={() => {}}
    >
      <Form>{Component}</Form>
    </Formik>
  </IntlProvider>
);

describe("Input renders", () => {
  it("Rendered Input short", () => {
    render(Wrapper(<Input name="example" variant="short" />));
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
  });

  it("Types text in Input short", async () => {
    render(Wrapper(<Input name="example" variant="short" />));
    const input = screen.getByRole("textbox");

    await userEvent.type(input, "Hello");
    expect(input).toHaveValue("Hello");
  });

  it("Check absence of cross icon on empty input", () => {
    render(Wrapper(<Input name="example" variant="short" />));

    const icon = screen.queryByTestId("clear-input-icon");
    expect(icon).not.toBeInTheDocument();
  });

  it("Check presence of cross icon on non-empty input", async () => {
    render(Wrapper(<Input name="example" variant="short" />));
    const input = screen.getByRole("textbox");

    fireEvent.input(input, { target: { value: "Hello" } });

    expect(screen.getByTestId("clear-input-icon")).toBeInTheDocument();
  });

  it("Shows counter in Input with text", async () => {
    render(Wrapper(<Input name="example" variant="short" counter="Counter" />));
    const input = screen.getByRole("textbox");
    await userEvent.type(input, "Hello");

    const counter = screen.getByText(/Counter/);

    expect(counter).toBeInTheDocument();
  });

  it("Doesn't show counter in Input without text", async () => {
    render(Wrapper(<Input name="example" variant="short" counter="Counter" />));

    const counter = screen.queryByText(/Counter/);

    expect(counter).not.toBeInTheDocument();
  });

  it("Show errors in Input", async () => {
    render(
      Wrapper(<Input name="example" variant="short" errors={["Error"]} />)
    );

    const counter = screen.queryByText(/Error/);

    expect(counter).toBeInTheDocument();
  });
});
