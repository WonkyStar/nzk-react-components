import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from 'react';
import DrawingTool, { Props as DrawingToolProps } from "./DrawingTool";
import styled from 'styled-components';
import { DrawingToolProvider } from "./DrawingToolProvider";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url('https://cdn.nightzookeeper.com/edu-assets/images/enclosures/ENCLOSURE_01-back.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  box-sizing: border-box;
`

export default {
  title: "Components/Drawing",
  component: DrawingTool,
  parameters: {
    layout:'fullscreen'
  }
} as Meta;


// Create a master template for mapping args to render the Button component
const Template: Story<DrawingToolProps> = (args) => <Container>
    <DrawingToolProvider>
      <DrawingTool {...{
        ...args,
        prompt: args.prompt || 'Draw your Animal',
        enableMagicCrop: true,
        magicCropUploadPreset: 'not-real-preset'
      }} />
    </DrawingToolProvider>
  </Container>

export const Primary = Template.bind({});
Primary.args = { };
