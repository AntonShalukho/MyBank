import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Form, Formik } from "formik";

import { RadioButton, RadioButtonProps } from ".";

import offlineIcon from "../static/offline-sing-up.svg";

import { ContentRadioBtn } from "../../pages_v2/WelcomePage/Registration/SingUpStepFour/ContentRadioBtn";

export default {
  title: "uikit_v2/RadioButton",
  component: RadioButton,
} as ComponentMeta<typeof RadioButton>;

const Template: ComponentStory<typeof RadioButton> = (
  args: RadioButtonProps
) => (
  <Formik
    initialValues={{
      name: "input",
    }}
    onSubmit={() => {}}
  >
    <Form>
      <RadioButton {...args} />
    </Form>
  </Formik>
);
export const DefaultRadioButton = Template.bind({});
DefaultRadioButton.args = {
  name: "Radio Button",
  label: "Radio Button",
  value: "value",
};

export const RadioButtonWithChildren = Template.bind({});
RadioButtonWithChildren.args = {
  name: "Radio Button",
  value: "value",
  className: "isCard",
  children: (
    <ContentRadioBtn
      icon={offlineIcon}
      title="Offline"
      description="Sign up meeting a courier or visiting bank"
    />
  ),
};
