import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button } from "../../ui/Button";
import { ButtonProps } from "../../types/Button";

export default {
  title: "shared/ui/Button",
  component: Button,
} as ComponentMeta<typeof Button>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args}>Hello</Button>
);

export const Default = Template.bind({});
Default.args = {};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = { variant: "primarySmall" };

export const SecondarySmall = Template.bind({});
SecondarySmall.args = { variant: "secondarySmall" };

export const PrimaryThick = Template.bind({});
PrimaryThick.args = { variant: "primaryThick" };

export const SecondaryThick = Template.bind({});
SecondaryThick.args = { variant: "secondaryThick" };

export const Advertisement = Template.bind({});
Advertisement.args = {
  variant: "advertisement",
  children: "Read more",
};
