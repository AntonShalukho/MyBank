import "@testing-library/jest-dom";

import { act, fireEvent, screen, waitFor } from "@testing-library/react";

import user from "@testing-library/user-event";

import { FormikValues } from "formik";

import { withProviders } from "../../utils/test-utils";

import { UserProfileSection } from ".";
import { InitialValuesDataType, SectionDataType } from "./types";

const personalInformationMockData = {
  name: { title: "name", description: "test" },
  surname: { title: "surname", description: "test" },
  email: {
    title: "e-mail",
    description: "test@gmail.com",
  },
  phone: {
    title: "phone number",
    description: "+375 09 009-09-09",
  },
  residenceAddress: {
    title: "residence address",
    description: "test",
  },
  residenceCity: {
    title: "residence city",
    description: "test",
  },
};

const initialValues: InitialValuesDataType = {
  email: "test@gmail.com",
  residenceAddress: "test",
  residenceCity: "test",
  houseNumber: "13",
  apartmentNumber: "31",
};

const mockValues = {
  email: [
    ["test@gmail.com"],
    [""],
    ["testgmail.com"],
    ["%^&#*e2hjdf@gmail.com"],
  ],
  phone: [
    ["+375 09 009-09-09"],
    ["375 09 009-09-09"],
    ["+375 38 759-35"],
    ["jdkfgfkgfg"],
  ],
};

describe("Rendering UserProfilePage component", () => {
  beforeEach(() => {
    withProviders(
      <UserProfileSection
        title="Personal Information"
        sectionData={personalInformationMockData}
        initialValues={initialValues}
        setInitialValues={function (value: FormikValues): void {
          throw new Error("Function not implemented.");
        }}
        setSectionData={function (
          sectionData: SectionDataType,
          values: FormikValues
        ): void {
          throw new Error("Function not implemented.");
        }}
        validationSchema={undefined}
        submitData={function (values: FormikValues): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
  });

  it("renders edit information button", () => {
    const editInformationButton = screen.getByTestId("edit_information_button");
    expect(editInformationButton).toBeInTheDocument();
  });

  it("turns on edit mode by click on edit button", async () => {
    const editInformationButton = screen.getByTestId("edit_information_button");
    user.click(editInformationButton);
    const submitButton = await screen.findByTestId("submit_button");
    expect(submitButton).toBeInTheDocument();
  });

  it("turns off edit mode by click on submit button", async () => {
    const editInformationButton = screen.getByTestId("edit_information_button");
    user.click(editInformationButton);
    const submitButton = await screen.findByTestId("submit_button");
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(submitButton).not.toBeInTheDocument();
    });
  });

  it("renders inputs by click on edit button", async () => {
    const editInformationButton = screen.getByTestId("edit_information_button");
    user.click(editInformationButton);
    const inputField = await screen.findAllByRole("textbox");
    expect(inputField).toHaveLength(2);
  });

  it("renders inputs by click on edit button", async () => {
    const editInformationButton = screen.getByTestId("edit_information_button");
    user.click(editInformationButton);
    const [emailInput, phoneInput] = await screen.findAllByRole("textbox");
    user.clear(emailInput);
    user.clear(phoneInput);
    user.tab();
    const submitButton = screen.getByRole("button", { name: /save/i });
    const errorMessage = await screen.findAllByText(/is a required field/i);
    expect(errorMessage).toHaveLength(2);
    expect(submitButton).toBeDisabled();
  });
});

describe("Rendering UserProfilePage component", () => {
  beforeEach(() => {
    withProviders(
      <UserProfileSection
        title="Personal Information"
        sectionData={personalInformationMockData}
        initialValues={initialValues}
        setInitialValues={function (value: FormikValues): void {
          throw new Error("Function not implemented.");
        }}
        setSectionData={function (
          sectionData: SectionDataType,
          values: FormikValues
        ): void {
          throw new Error("Function not implemented.");
        }}
        validationSchema={undefined}
        submitData={function (values: FormikValues): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const editInformationButton = screen.getByTestId("edit_information_button");
    user.click(editInformationButton);
  });

  it.each(mockValues.email)(".test email with (%i)", async (value) => {
    const [emailInput] = await screen.findAllByRole("textbox");
    const submitButton = screen.getByRole("button", { name: /save/i });
    act(() => {
      user.clear(emailInput);
      user.type(emailInput, value);
      user.tab();
    });
    expect(submitButton).toBeDisabled();
  });

  it.each(mockValues.phone)(".test phone with (%i)", async (value) => {
    const inputs = await screen.findAllByRole("textbox");
    const phoneInput = inputs[1];
    const submitButton = screen.getByRole("button", { name: /save/i });
    act(() => {
      user.clear(phoneInput);
      user.type(phoneInput, value);
      user.tab();
    });
    expect(submitButton).toBeDisabled();
  });
});
