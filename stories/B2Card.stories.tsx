import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { B2Theme, B2Card } from '../src';

const meta: Meta<typeof B2Card> = {
  title: 'B2Card',
  component: B2Card,
  argTypes: {
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

type Story = StoryObj<typeof B2Card>;

export const Default: Story = {
  render: (args) => (
    <B2Theme>
      <B2Card {...args} />
    </B2Theme>
  ),
};
