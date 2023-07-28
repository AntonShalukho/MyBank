import { ComponentStory } from "@storybook/react";

import { IntlProvider } from "react-intl";

import { CopyField } from "../../ui/CopyField";

import { localeContent } from "../../assets/translation/languages";

export default {
  title: "components/CopyField",
  component: CopyField,
};

export const Template: ComponentStory<typeof CopyField> = () => (
  <IntlProvider
    locale="en-us"
    defaultLocale="en"
    messages={localeContent["en-us"]}
  >
    <CopyField />
  </IntlProvider>
);
