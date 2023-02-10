import React from "react";

import "@testing-library/jest-dom";

import { screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

import { RegistrationForm } from "./index";

import { withProviders } from "../../../utils/test-utils";
import { setupStore } from "../../../redux/store/store";
import { setPhoneNum } from "../../../redux/actions/userActions";

describe("Registration component step one", () => {
  it("renders first step correctly", () => {
    const incrementStep = jest.fn();
    withProviders(
      <RegistrationForm
        incrementStep={incrementStep}
        activeStep={0}
        isClient={false}
      />
    );
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
describe("Registration component step two", () => {
  it("renders second step without input field if phone number isn't dispatched", () => {
    const incrementStep = jest.fn();
    withProviders(
      <RegistrationForm
        incrementStep={incrementStep}
        activeStep={1}
        isClient={false}
      />
    );
    expect(screen.queryByPlaceholderText(/Verification/i)).toBeNull();
    expect(screen.queryByText(/Send code again/)).toBeNull();
  });

  it("renders second step correctly with phone number(2)", () => {
    const incrementStep = jest.fn();
    const store = setupStore();
    store.dispatch(setPhoneNum("1234567"));
    withProviders(
      <RegistrationForm
        incrementStep={incrementStep}
        activeStep={1}
        isClient={false}
      />,
      { store }
    );
    expect(screen.getByText(/123\s45\s67/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Verification/i)).toBeInTheDocument();
    expect(screen.getByText(/Send code again/)).toBeInTheDocument();
  });
});
describe("Registration component step three", () => {
  it("renders third step correctly for non-client", () => {
    const incrementStep = jest.fn();
    withProviders(
      <RegistrationForm incrementStep={incrementStep} activeStep={2} />
    );
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByText(/ENTER INFO FORM/)).toBeInTheDocument();
  });

  it("renders third step correctly for client", () => {
    const incrementStep = jest.fn();
    withProviders(
      <RegistrationForm
        incrementStep={incrementStep}
        activeStep={2}
        isClient={true}
      />
    );
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Confirm password/)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter password/)).toBeInTheDocument();
  });
});

describe("Registration component step four", () => {
  it("renders fourth step correctly for bank client", () => {
    const incrementStep = jest.fn();
    withProviders(
      <RegistrationForm
        incrementStep={incrementStep}
        activeStep={3}
        isClient={true}
      />
    );
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByText(/Choose your secret question/)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your answer/)
    ).toBeInTheDocument();
  });
  it("renders fourth step correctly for non-bank client", () => {
    const incrementStep = jest.fn();

    withProviders(
      <RegistrationForm incrementStep={incrementStep} activeStep={3} />
    );
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter password/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Confirm password/i)
    ).toBeInTheDocument();
  });
});
describe("Registration component step five", () => {
  it("renders fifth step correctly for non-client", () => {
    const incrementStep = jest.fn();
    withProviders(
      <RegistrationForm incrementStep={incrementStep} activeStep={4} />
    );
    expect(screen.getByText(/sign up/i)).toBeInTheDocument();
    expect(screen.getByText(/Choose your secret question/)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/Enter your answer/)
    ).toBeInTheDocument();
  });
});
it("continue button works", () => {
  const incrementStep = jest.fn();

  withProviders(
    <RegistrationForm incrementStep={incrementStep} activeStep={2} />
  );
  userEvent.click(screen.getByRole("button"));
  expect(incrementStep).toHaveBeenCalledTimes(1);
});
