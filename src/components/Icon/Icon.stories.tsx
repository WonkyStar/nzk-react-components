import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from 'react';
import Icon, { IconProps } from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<IconProps> = (args) => <Icon {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { name: 'transfer' };
