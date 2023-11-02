import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React, { useRef } from 'react';
import { SyncedText } from './SyncedText';
import type { ISyncedTextProps, ISyncedTextRef } from './types'
import styled from 'styled-components';
import Button from '../Button';
import { PlayVideo } from '../../icons';

const StyledSyncedText = styled.div`
  font-size: 2em;
  .highlighted > .synced-text--word {
    background-color: rgba(255,0,0);
  }
  .has-highlighted {
    background-color: rgba(255,0,0,0.2);
  }
`

export default {
  title: "Components/SyncedText",
  component: SyncedText,
  decorators: [
    (Story) => (
      <StyledSyncedText>
        <Story />
      </StyledSyncedText>
    ),
  ],
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<ISyncedTextProps> = (args) => {
  const ref = useRef<ISyncedTextRef | null>(null)

  return <>
    <SyncedText {...args} setRef={(r) => {
      ref.current = r
    }} />
    <Button theme='primary' round size='small' onClick={() => {
      if (!ref.current?.isPlaying()) {
        ref.current?.play()
      } else {
        ref.current?.pause()  
      }
    }}>
      <PlayVideo />
    </Button>
  </>
}

// Reuse that template for creating different stories
export const Primary = Template.bind({
  
});
Primary.args = {
  autoPlay: false,
  value: {
    "audio":"https://storage.googleapis.com/nzk-app-cdn/assets/content/audios/143f6bd0-d7ff-4fb1-bc80-d59180d6529b/default.mp3",
    "sequences":[{"text":"What","time":[0.8739461816773889,0.3647238095238095]},{"text":"sounds","time":[1.2715978626934261,0.9118095238095238]},{"text":"does","time":[1.7852157841388434,1.2765333333333333]},{"text":"your","time":[1.9739627939385915,1.6412571428571427]},{"text":"animal","time":[2.13625917632991,2.188342857142857]},{"text":"make?","time":[2.5354377410334212,2.644247619047619]}]}
};
