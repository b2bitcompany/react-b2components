import React from 'react';

import { Meta, Story } from '@storybook/react';

import { B2Theme, B2ButtonsPage, IB2ButtonsPage } from '../src/';

const meta: Meta = {
  title: 'B2ButtonsPage',
  component: B2ButtonsPage,
  argTypes: {
    pages: {
      defaultValue: 10,
    },
    currentPage: {
      defaultValue: 3,
    },
    className: {
      description: 'Used to customize the component with styled-components',
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

const Template: Story<IB2ButtonsPage> = (args) => (
  <B2Theme>
    <B2ButtonsPage {...args} />
  </B2Theme>
);

export const Default = Template.bind({});
