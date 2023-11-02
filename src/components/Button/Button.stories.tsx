import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from 'react';
import Button, { ButtonProps } from "./Button";
import { Dice } from '../../icons';

export default {
  title: "Components/Button",
  component: Button
} as Meta;

// Create a master template for mapping args to render the Button component
// @ts-ignore
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = { theme: 'confirm', size: 'regular', children: 'Hello world' };

export const CustomColours = Template.bind({});
CustomColours.args = {
  backgroundColor: '#2ac267',
  strokeColor: '#2c9b34',
  shadowColor: '#3e753d',
  dropShadowColor: '#115606',
  size: 'regular',
  children: 'Hello world'
};

export const AutomaticColours = Template.bind({});
AutomaticColours.args = {
  backgroundColor: '#2ac267',
  size: 'regular',
  children: 'Hello world'
};


export const RoundWithIcon = Template.bind({});
RoundWithIcon.args = {
  round: true,
  children: <Dice />
};

export const AsButton = () => {
  return <Button as='button'>Hello</Button>
}

export const AsLink = () => {
  return <Button as='a' href='#'>Hello</Button>
}

