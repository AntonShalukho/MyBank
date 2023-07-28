import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";

import { Button, ButtonProps } from ".";

export default {
  title: "uikit/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args}>Hello</Button>
);

export const Default = Template.bind({});
Default.args = {};

export const Form = Template.bind({});
Form.args = { variant: "form" };

export const Dropdown = Template.bind({});
Dropdown.args = { variant: "dropdown" };

export const Navigation = Template.bind({});
Navigation.args = { variant: "navigation" };

export const Apply = Template.bind({});
Apply.args = { variant: "apply" };

export const Find = Template.bind({});
Find.args = { variant: "find" };

export const ApplyDescription = Template.bind({});
ApplyDescription.args = { variant: "applyDescription" };

export const OpenAccountPlus = Template.bind({});
OpenAccountPlus.args = { variant: "openAccountPlus" };
