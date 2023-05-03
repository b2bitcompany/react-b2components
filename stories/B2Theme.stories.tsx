import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { B2Theme, B2Button } from '../src';

const meta: Meta<typeof B2Theme> = {
  title: 'B2Theme',
  component: B2Theme,
  argTypes: {
    theme: {
      description: 'Styled components theme',
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

type Story = StoryObj<typeof B2Theme>;

export const Default: Story = {
  render: (args) => (
    <B2Theme>
      <B2Button>Primary button on B2BIT Theme</B2Button>
    </B2Theme>
  ),
};
