import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IntlProvider } from "react-intl";

import { BackButton } from "../../ui/BackButton";

import { localeContent } from "../../assets/translation/languages";

export default {
  title: "components/BackButton",
  component: BackButton,
} as ComponentMeta<typeof BackButton>;

type BackButtonProps = {
  onClick: () => void;
};

export const Primary: ComponentStory<typeof BackButton> = (
  args: BackButtonProps
) => (
  <IntlProvider
    locale="en-us"
    defaultLocale="en"
    messages={localeContent["en-us"]}
  >
    <BackButton {...args} />
  </IntlProvider>
);
