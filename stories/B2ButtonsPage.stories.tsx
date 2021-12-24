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

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
