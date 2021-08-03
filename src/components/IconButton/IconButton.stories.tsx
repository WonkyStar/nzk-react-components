import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from 'react';
import Icon from '../Icon/Icon';
import IconButton, { IconButtonProps } from "./IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IconButtonProps> = (args) => <IconButton {...args}>Hello world</IconButton>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { theme: 'confirm', size: 'regular', icon: <Icon name='checkmark' />};
