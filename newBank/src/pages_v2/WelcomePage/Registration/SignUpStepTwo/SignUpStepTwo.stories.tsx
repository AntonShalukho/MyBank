import React from "react";

import { Meta } from "@storybook/react";

import { MemoryRouter } from "react-router";

import { IntlProvider } from "react-intl";

import { SignUpStepTwo } from ".";

import { localeContent } from "../../../../translation/languages";

const meta: Meta<typeof SignUpStepTwo> = {
  component: SignUpStepTwo,
  title: "Pages/SignUp/SignUpStepTwo",
  decorators: [
    (Story) => (
      <IntlProvider
        locale="en-us"
        defaultLocale="en"
        messages={localeContent["en-us"]}
      >
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </IntlProvider>
    ),
  ],
};

export default meta;

export const Default = {};
