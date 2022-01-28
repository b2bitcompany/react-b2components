import React from 'react';

import { Meta, Story } from '@storybook/react';

import { B2Theme, B2Button, IB2Button } from '../src';

const meta: Meta = {
  title: 'B2Button',
  component: B2Button,
  argTypes: {
    variant: {
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
export const Secondary = Template.bind({});
export const Outline = Template.bind({});
export const Transparent = Template.bind({});

Secondary.args = {
  variant: 'secondary',
  children: 'Secondary',
};

Outline.args = {
  variant: 'outline',
  children: 'Outline',
};

Transparent.args = {
  variant: 'transparent',
  children: 'Transparent',
};
