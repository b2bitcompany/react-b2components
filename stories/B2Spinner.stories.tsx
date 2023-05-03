import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { B2Theme, B2Spinner, IB2Spinner } from '../src';

const meta: Meta<typeof B2Spinner> = {
  title: 'B2Spinner',
  component: B2Spinner,
  argTypes: {
    className: {
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

type Story = StoryObj<typeof B2Spinner>;

export const Default: Story = {
  render: (args) => (
    <B2Theme>
      <B2Spinner {...args} />
    </B2Theme>
  ),
};
