import React from "react";

import { ComponentStory } from "@storybook/react";

import { BrowserRouter } from "react-router-dom";

import { Modal, ModalProps } from ".";

export default {
  title: "components/Modal",
  component: Modal,
  args: {
    onBackClick: () => {},
    onClose: () => {},
    children: <div>Hi</div>,
  },
};

export const Template: ComponentStory<typeof Modal> = (args: ModalProps) => (
  <BrowserRouter>
    <Modal {...args} />
  </BrowserRouter>
);
