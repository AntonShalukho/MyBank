import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Form, Formik } from "formik";

import { IntlProvider } from "react-intl";

import { Input } from "../../ui/Input";

import { localeContent } from "../../../../translation/languages";

import { InputProps } from "../../ui/Input/types";

export default {
  title: "uikit_v2/Input_v2",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <IntlProvider
    locale="en-us"
    defaultLocale="en"
    messages={localeContent["en-us"]}
  >
    <Formik
      initialValues={{
        example: "",
      }}
      onSubmit={() => {}}
    >
      <Form>
        <Input {...args} />
      </Form>
    </Formik>
  </IntlProvider>
);
export const Default = Template.bind({});
Default.args = {
  name: "example",
};
export const Short = Template.bind({});
Short.args = {
  name: "example",
  label: "Label for input",
  variant: "short",
};
export const ShortWithValue = Template.bind({});
ShortWithValue.args = {
  name: "example",
  label: "Label for input",
  value: "Hello, I am Input",
  variant: "short",
};
export const ShortWithValueAndCounter = Template.bind({});
ShortWithValueAndCounter.args = {
  name: "example",
  label: "Label for input",
  value: "Hello, I am Input",
  variant: "short",
  counter: "68/100",
};
export const ShortErrorWithEmptyMessage = Template.bind({});
ShortErrorWithEmptyMessage.args = {
  name: "example",
  label: "Label for input",
  errors: [],
  variant: "short",
};
export const ShortErrorWithMessage = Template.bind({});
ShortErrorWithMessage.args = {
  name: "example",
  label: "Label for input",
  errors: ["Requirement field"],
  variant: "short",
};
export const Long = Template.bind({});
Long.args = {
  name: "example",
  label: "Label for input",
  variant: "long",
};
export const LongWithValue = Template.bind({});
LongWithValue.args = {
  name: "example",
  label: "Label for input",
  variant: "long",
  value: "Hello, I am Input",
};
export const LongWithValueAndCounter = Template.bind({});
LongWithValueAndCounter.args = {
  name: "example",
  label: "Label for input",
  variant: "long",
  value: "Hello, I am Input",
  counter: "68/100",
};
export const LongErrorWithEmptyMessage = Template.bind({});
LongErrorWithEmptyMessage.args = {
  name: "example",
  label: "Label for input",
  variant: "long",
  errors: [],
};
export const LongErrorWithMessage = Template.bind({});
LongErrorWithMessage.args = {
  name: "example",
  label: "Label for input",
  variant: "long",
  errors: ["Requirement field"],
};
export const LongWithHiddenIcon = Template.bind({});
LongWithHiddenIcon.args = {
  name: "example",
  label: "Label for input",
  variant: "long_With_Hide_Icon",
};
export const LongWithHiddenIconAndError = Template.bind({});
LongWithHiddenIconAndError.args = {
  name: "example",
  label: "Label for input",
  variant: "long_With_Hide_Icon",
  errors: ["Requirement field"],
};
