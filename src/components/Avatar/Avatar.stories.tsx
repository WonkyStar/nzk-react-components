import { Story } from "@storybook/react";
import { Meta } from "@storybook/react/types-6-0";
import React from 'react';
import Avatar, { AvatarProps } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar
} as Meta;

// Create a master template for mapping args to render the Button component
const Template: Story<AvatarProps> = (args) => <Avatar {...args} />;

// Reuse that template for creating different stories
export const fromStudent = Template.bind({});
fromStudent.args = {
  user: {
    type: 'student',
    avatar: {
      url: "https://cdn.nightzookeeper.com/res/nzk/image/upload/piy1v6p77oqffooovdzl/1537191042.png"
    },
    countryCode: 'FR'
  },
  size: '200px'
};

export const fromTemplate = Template.bind({});
fromTemplate.args = {
  src: "https://cdn.nightzookeeper.com/res/nzk/image/upload/piy1v6p77oqffooovdzl/1537191042.png",
  countryCode: 'FR',
  size: '200px'
};

export const flagHidden = Template.bind({});
flagHidden.args = {
  user: {
    type: 'student',
    avatar: {
      url: "https://cdn.nightzookeeper.com/res/nzk/image/upload/piy1v6p77oqffooovdzl/1537191042.png"
    },
    countryCode: 'FR'
  },
  size: '200px',
  flagHidden: true
};

export const fromTutor = Template.bind({});
fromTutor.args = {
  user: {
    type: 'tutor',
    avatar: {
      url: "https://cdn.nightzookeeper.com/edu-assets/images/paul.jpg"
    }
  },
  size: '200px'
};

export const fromParent = Template.bind({});
fromParent.args = {
  user: {
    type: 'parent',
    countryCode: 'GB'
  },
  size: '200px'
};

export const fromNoAvatarStudent = Template.bind({});
fromNoAvatarStudent.args = {
  user: {
    type: 'student',
    avatar: { url: '' },
    countryCode: 'GB'
  },
  size: '200px'
};

export const customColors = Template.bind({});
customColors.args = {
  user: {
    type: 'student',
    avatar: { url: '' },
    countryCode: 'GB'
  },
  colors: {
    border: '#009EE2',
    shadow: '#025899',
    dropshadow: 'rgba(0,0,0,0.4)'
  },
  size: '200px'
};