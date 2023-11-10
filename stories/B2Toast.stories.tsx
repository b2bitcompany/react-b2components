import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Button, B2Toast, IB2Toast, B2Switch, B2Card } from '../src';

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
    const [_, setArgs] = useArgs<IB2Toast>();

    return (
      <B2Theme>
        <B2Card
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
          }}
        >
          <B2Button
            variant="primary"
            onClick={() => {
              setArgs({
                ...args,
                list: [
                  ...args.list,
                  {
                    id: `${Math.random()}`,
                    type: 'info',
                    text: 'Info',
                  },
                  {
                    id: `${Math.random()}`,
                    type: 'warning',
                    text: 'Warning',
                  },
                  {
                    id: `${Math.random()}`,
                    type: 'error',
                    text: 'Error',
                  },
                  {
                    id: `${Math.random()}`,
                    type: 'success',
                    text: 'Success',
                  },
                ],
              });
            }}
          >
            Show toasts
          </B2Button>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <span>Button props</span>
            <B2Switch
              isChecked={!!args.buttonProps}
              onChange={() =>
                setArgs({
                  ...args,
                  buttonProps: args.buttonProps
                    ? undefined
                    : {
                        text: 'Click me',
                        onClick: () => alert('Clicked'),
                      },
                })
              }
            />
          </div>
          <B2Toast
            {...args}
            remove={id =>
              setArgs({
                ...args,
                list: args.list.filter(tost => tost.id !== id),
              })
            }
          />
        </B2Card>
      </B2Theme>
    );
  },
  args: {
    list: [],
  },
};
