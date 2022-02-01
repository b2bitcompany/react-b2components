import React from 'react';

import { Meta, Story } from '@storybook/react';

import { B2Theme, B2Button, IB2Theme } from '../src';

const meta: Meta = {
  title: 'B2Theme',
  component: B2Theme,
  argTypes: {
    theme: {
      description: 'Styled components theme',
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

const Template: Story<IB2Theme> = (args) => (
  <B2Theme {...args}>
    <B2Button variant="primary">Primary button on B2BIT Theme</B2Button>
  </B2Theme>
);

export const Default = Template.bind({});
