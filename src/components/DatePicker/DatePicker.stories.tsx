import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from 'react';
import DatePicker, { DatePickerProps } from "./DatePicker";

export default {
  title: "Components/DatePicker",
  component: DatePicker
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<DatePickerProps> = (args) => <DatePicker {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
