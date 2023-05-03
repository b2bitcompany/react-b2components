import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Carousel, IB2Carousel } from '../src';

const meta: Meta<typeof B2Carousel> = {
  title: 'B2Carousel',
  component: B2Carousel,
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

type Story = StoryObj<typeof B2Carousel>;

export const Default: Story = {
  render: (args) => {
    const [_, setArgs] = useArgs();

    return (
      <B2Theme>
        <B2Carousel
          {...args}
          onSelect={(selected) => setArgs({ ...args, selected })}
        />
      </B2Theme>
    );
  },
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    selected: 0,
  },
};
