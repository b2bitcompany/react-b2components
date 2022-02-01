import React from 'react';

import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Switch, IB2Switch } from '../src';

const meta: Meta = {
  title: 'B2Switch',
  component: B2Switch,
  argTypes: {
    isChecked: {
      defaultValue: true,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IB2Switch> = (args) => {
  const [_, setArgs] = useArgs();

  return (
    <B2Theme>
      <B2Switch
        {...args}
        onChange={() => setArgs({ ...args, isChecked: !args.isChecked })}
      />
    </B2Theme>
  );
};

export const Default = Template.bind({});
