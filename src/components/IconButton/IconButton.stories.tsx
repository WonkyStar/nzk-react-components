import { StoryFn, Meta } from "@storybook/react";
import { Checkmark } from "../../icons";
import React from "react";
import IconButton, { IconButtonProps } from "./IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: StoryFn<IconButtonProps> = (args) => (
  <IconButton {...args}>Hello world</IconButton>
);

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {
  theme: "confirm",
  size: "regular",
  icon: <Checkmark />,
};
