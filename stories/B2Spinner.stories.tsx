import React from 'react';

import { Meta, Story } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

import { B2Theme, B2Spinner, IB2Spinner } from '../src';

const meta: Meta = {
  title: 'B2Spinner',
  component: B2Spinner,
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

const Template: Story<IB2Spinner> = (args) => {
  return (
    <B2Theme>
      <B2Spinner {...args} />
    </B2Theme>
  );
};

export const Default = Template.bind({});
