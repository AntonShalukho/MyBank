import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IntlProvider } from "react-intl";

import { BackButtonOld } from "./index";
import { localeContent } from "../../translation/languages";

export default {
  title: "components/BackButton",
  component: BackButtonOld,
} as ComponentMeta<typeof BackButtonOld>;

type BackButtonProps = {
  onClick: () => void;
};

export const Primary: ComponentStory<typeof BackButtonOld> = (
  args: BackButtonProps
) => (
  <IntlProvider
    locale="en-us"
    defaultLocale="en"
    messages={localeContent["en-us"]}
  >
    <BackButtonOld {...args} />
  </IntlProvider>
);
