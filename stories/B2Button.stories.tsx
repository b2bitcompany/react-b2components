import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { B2Theme, B2Button, IB2Button } from '../src';

const meta: Meta<typeof B2Button> = {
  title: 'B2Button',
  component: B2Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'transparent'],
      control: { type: 'radio' },
    },
    children: {
      description: 'The content of the button',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof B2Button>;

export const Default: Story = {
  render: (args) => (
    <B2Theme>
      <B2Button {...args} />
    </B2Theme>
  ),
  args: { variant: 'primary', children: 'Primary' },
};
