import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Cross } from "../../ui/Cross";

import { CrossProps } from "../../types/Cross";

export default {
  title: "shared/ui/Cross",
  component: Cross,
} as ComponentMeta<typeof Cross>;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const Template: ComponentStory<typeof Cross> = (args: CrossProps) => (
  <Cross {...args} />
);

export const Default = Template.bind({});
Default.args = {};
