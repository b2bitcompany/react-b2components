import React from 'react';

import { Meta, Story } from '@storybook/react';

import { B2Theme, B2Card, IB2Card } from '../src';

const meta: Meta = {
  title: 'B2Card',
  component: B2Card,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IB2Card> = () => (
  <B2Theme>
    <B2Card>Card with theme box shadow and border radius</B2Card>
  </B2Theme>
);

export const Default = Template.bind({});
