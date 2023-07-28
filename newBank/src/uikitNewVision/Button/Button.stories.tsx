import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from ".";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof Button> = (args: any) => (
  <Button {...args} />
);

export const Default = Template.bind({});
Default.args = {};
