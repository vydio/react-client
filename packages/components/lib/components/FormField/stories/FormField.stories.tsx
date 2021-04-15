import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Form } from "@lib/components/Form";
import { FormField, FormFieldProps } from "@lib/components/FormField";

export default {
  title: "FormField",
  component: FormField,
} as Meta;

const Template: Story<FormFieldProps> = (props) => (
  <Form>
    <FormField placeholder="Example text..." {...props} />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  label: "Text Field",
};

export const WithPrefix = Template.bind({});
WithPrefix.args = {
  label: "Text Field",
  prefix: "$",
};

export const WithHelpInfo = Template.bind({});
WithHelpInfo.args = {
  label: "Text Field with help text",
  help: "Example text providing helpful info.",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Text Field with error",
  error: Error("An error has occurred"),
};