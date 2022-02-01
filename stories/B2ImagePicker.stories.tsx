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
    className: {
      description: 'Used to customize the component with styled-components',
      control: {
        disable: true,
      },
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

export const Default = Template.bind({});
