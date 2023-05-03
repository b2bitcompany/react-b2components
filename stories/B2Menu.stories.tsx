import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Menu, B2MenuItem, B2Button } from '../src';

const meta: Meta<typeof B2Menu> = {
  title: 'B2Menu',
  component: B2Menu,
  argTypes: {
    anchor: {
      control: {
        disable: true,
      },
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

type Story = StoryObj<typeof B2Menu>;

export const Default: Story = {
  render: (args) => {
    const button = useRef(null);
    const [_, setArgs] = useArgs();

    return (
      <B2Theme>
        <B2Button
          onClick={() => {
            setArgs({ ...args, isShowing: true });
          }}
          ref={button}
        >
          Open Menu
        </B2Button>
        <B2Menu
          {...args}
          onHide={() => setArgs({ ...args, isShowing: false })}
          anchor={button.current}
        >
          <B2MenuItem>Item 1</B2MenuItem>
        </B2Menu>
      </B2Theme>
    );
  },
  args: { isShowing: false },
};
