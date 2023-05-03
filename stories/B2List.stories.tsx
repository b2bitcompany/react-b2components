import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { B2Theme, B2List } from '../src';

const meta: Meta<typeof B2List> = {
  title: 'B2List',
  component: B2List,
  argTypes: {
    renderItem: {
      type: 'function',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof B2List>;

export const Default: Story = {
  render: (args) => (
    <B2Theme>
      <B2List {...args} />
    </B2Theme>
  ),
  args: {
    data: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
    renderItem: (item: unknown) => <span>{item as string}</span>,
    emptyListComponent: <span>Empty list</span>,
  },
};

export const WithHeader: Story = {
  render: (args) => (
    <B2Theme>
      <B2List {...args} />
    </B2Theme>
  ),
  args: {
    ...Default.args,
    header: <span>Header</span>,
  },
};

export const WithPaginator: Story = {
  render: (args) => (
    <B2Theme>
      <B2List {...args} />
    </B2Theme>
  ),
  args: {
    ...Default.args,
    paginator: true,
    amountPerPage: 3,
    changePage: (newPage: number) => {
      console.log('newPage', newPage);
    },
    currentPage: 1,
    total: 6,
  },
};
