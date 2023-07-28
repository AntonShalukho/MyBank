import React from "react";

import { ComponentStory } from "@storybook/react";

import { Popup, PopupProps } from ".";

export default {
  title: "components/Popup",
  component: Popup,
  args: {
    children: (
      <div>
        Hi, I am "Popup" children. I have been ReactNode or JSX.Element. Also
        you can chose button variant
      </div>
    ),
    buttonContent: "apply button",
    variant: "apply",
  },
};

export const Template: ComponentStory<typeof Popup> = (args: PopupProps) => (
  <Popup {...args} />
);
