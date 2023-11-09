import React, { useRef } from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Button, B2Toast } from '../src';

const meta: Meta<typeof B2Toast> = {
  title: 'B2Toast',
  component: B2Toast,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof B2Toast>;

export const Default: Story = {
  render: args => {
    const [_, setArgs] = useArgs();

    return (
      <B2Theme>
        <B2Button
          variant="primary"
          onClick={() => {
            setArgs({
              ...args,
              list: [
                ...args.list,
                {
                  id: `${Math.random()}`,
                  type: 'success',
                  text: 'Success',
                },
              ],
              button: { text: 'Click me', onClick: () => alert('Clicked') },
            });
          }}
        >
          Show toast
        </B2Button>
        <B2Toast
          {...args}
          remove={id =>
            setArgs({
              ...args,
              list: args.list.filter(tost => tost.id !== id),
            })
          }
        />
      </B2Theme>
    );
  },
  args: { list: [] },
};
