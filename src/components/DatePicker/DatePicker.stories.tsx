import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Button from "../Button/Button";
import DatePicker, { DatePickerProps } from "./DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};

export const DefaultValue = Template.bind({});
DefaultValue.args = { defaultValue: new Date("2022-01-01") };

export const CustomInput = Template.bind({});
CustomInput.args = { input: <Button theme="red" size="large" /> };
