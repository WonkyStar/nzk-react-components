import { StoryFn, Meta } from "@storybook/react";
import React from "react";
import Input, { InputProps } from "./Input";

export default {
  title: "Components/Input",
  component: Input,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};
