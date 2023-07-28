import React from "react";

import { ComponentStory } from "@storybook/react";

import { Popup } from "../../Popup";

import { PopupProps } from "../../Popup/types";

export default {
  title: "entities/Popup",
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
