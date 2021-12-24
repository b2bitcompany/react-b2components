import React from 'react';

import { Meta, Story } from '@storybook/react';

import { B2Theme, B2ImagePicker, IB2ImagePicker } from '../src';

const meta: Meta = {
  title: 'B2ImagePicker',
  component: B2ImagePicker,
  argTypes: {
    text: {
      defaultValue: 'Upload Image',
    },
    extensions: {
      defaultValue: ['jpg', 'jpeg', 'png'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IB2ImagePicker> = (args) => (
  <B2Theme>
    <B2ImagePicker {...args} />
  </B2Theme>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
