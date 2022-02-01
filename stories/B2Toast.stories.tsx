import React, { useRef } from 'react';

import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Button, B2Toast, IB2Toast } from '../src';

const meta: Meta = {
  title: 'B2Toast',
  component: B2Toast,
  argTypes: {
    list: {
      defaultValue: [],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IB2Toast> = (args) => {
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
          });
        }}
      >
        Show toast
      </B2Button>
      <B2Toast
        {...args}
        remove={(id) =>
          setArgs({
            ...args,
            list: args.list.filter((tost) => tost.id !== id),
          })
        }
      />
    </B2Theme>
  );
};

export const Default = Template.bind({});
