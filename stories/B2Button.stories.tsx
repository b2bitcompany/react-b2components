import React from 'react';

import { Meta, Story } from '@storybook/react';

import { B2Theme, B2Button, IB2Button } from '../src';

const meta: Meta = {
  title: 'B2Button',
  component: B2Button,
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'outline', 'transparent'],
      control: { type: 'radio' },
      defaultValue: 'primary',
    },
    children: {
      description: 'The content of the button',
      defaultValue: 'Primary',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IB2Button> = (args) => (
  <B2Theme>
    <B2Button {...args} />
  </B2Theme>
);

export const Default = Template.bind({});
