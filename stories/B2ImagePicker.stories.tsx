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
      defaultValue: ['image/jpg', 'image/jpeg', 'image/png'],
    },
    maxSize: {
      defaultValue: 5000000,
    },
    onChooseImage: {
      defaultValue: () =>
        new Promise((resolve) => setTimeout(() => resolve(true), 2000)),
    },
    onInvalidExtension: {
      defaultValue: () => alert('Invalid Extension'),
    },
    onInvalidSize: {
      defaultValue: () => alert('Invalid Size'),
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
