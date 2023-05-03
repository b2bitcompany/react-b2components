import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { B2Theme, B2ButtonsPage } from '../src/';

const meta: Meta<typeof B2ButtonsPage> = {
  title: 'B2ButtonsPage',
  component: B2ButtonsPage,
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

type Story = StoryObj<typeof B2ButtonsPage>;

export const Default: Story = {
  render: (args) => (
    <B2Theme>
      <B2ButtonsPage {...args} />
    </B2Theme>
  ),
  args: { pages: 10, currentPage: 3 },
};
