import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from 'react';
import Button from '../Button/Button';
import Modal, { ModalProps } from "./Modal";
import { ModalProvider, useModalState } from './ModalState';

export default {
  title: "Components/Modal",
  component: Modal
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ModalProps> = (args) => <Modal {...args}>
  <div>Hello</div>
</Modal>;

// Reuse that template for creating different stories
export const Primary = Template.bind({});
Primary.args = {};

export const ErrorModal = Template.bind({});
ErrorModal.args = {
  errorMessage: 'An error has occured...'
};

export const WithActions = Template.bind({});
WithActions.args = {
  actions: [
    <Button theme='confirm' size='small'>Yes</Button>,
    <Button theme='red' size='small'>No</Button>,
  ]
};



const Consumer = () => {
  const { open } = useModalState()
  return <Button theme='confirm' size='small' onClick={() => {
    open(<Modal>Hello world</Modal>)
  }}>Open</Button>
}
// Create a master template for mapping args to render the Button component
const Container: Story<ModalProps> = (args) => {
  return  <ModalProvider>
    <Consumer />
  </ModalProvider>
}

export const WithContainer = Container.bind({});
WithContainer.args = {
};