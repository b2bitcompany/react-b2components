import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Rate, IB2Rate } from '../src';

const meta: Meta<typeof B2Rate> = {
  title: 'B2Rate',
  component: B2Rate,
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

type Story = StoryObj<typeof B2Rate>;

export const JustToShow: Story = {
  render: (args) => (
    <B2Theme>
      <B2Rate {...args} />
    </B2Theme>
  ),
  args: { value: 2.5, starSize: 50 },
};

export const WithClick: Story = {
  render: (args) => {
    const [_, setArgs] = useArgs();

    return (
      <B2Theme>
        <B2Rate
          {...args}
          setValue={(value) => {
            setArgs({ ...args, value });
          }}
        />
      </B2Theme>
    );
  },
  args: { value: 2.5, starSize: 50 },
};
