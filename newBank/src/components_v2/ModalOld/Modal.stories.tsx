import React from "react";

import { ComponentStory } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";

import { ModalOld, ModalProps } from ".";

export default {
  title: "components/Modal",
  component: ModalOld,
  args: {
    onBackClick: () => {},
    onClose: () => {},
    children: <div>Hi</div>,
  },
};

export const Template: ComponentStory<typeof ModalOld> = (args: ModalProps) => (
  <BrowserRouter>
    <ModalOld {...args} />
  </BrowserRouter>
);
