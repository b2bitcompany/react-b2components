import React from 'react';

import { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Switch } from '../src';

const meta: Meta<typeof B2Switch> = {
  title: 'B2Switch',
  component: B2Switch,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof B2Switch>;

export const Default: Story = {
  render: (args) => {
    const [_, setArgs] = useArgs();

    return (
      <B2Theme>
        <B2Switch
          {...args}
          onChange={() => setArgs({ ...args, isChecked: !args.isChecked })}
        />
      </B2Theme>
    );
  },
  args: { isChecked: true },
};
