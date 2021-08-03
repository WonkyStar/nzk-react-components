import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from 'react';
import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ButtonProps> = (args) => <Button {...args}>Hello world</Button>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { theme: 'confirm', size: 'regular' };

export const CustomColours = Template.bind({});
CustomColours.args = {
  backgroundColor: '#2ac267',
  strokeColor: '#2c9b34',
  shadowColor: '#3e753d',
  dropShadowColor: '#115606',
  size: 'regular'
};

export const AutomaticColours = Template.bind({});
AutomaticColours.args = {
  backgroundColor: '#2ac267',
  size: 'regular'
};

