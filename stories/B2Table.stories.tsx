import React from 'react';

import { Meta, StoryObj } from '@storybook/react';

import { B2Theme, B2Table, B2TableRow, B2TableDataCell } from '../src';

interface IData {
  id: number;
  name: string;
}

const meta: Meta<typeof B2Table> = {
  title: 'B2Table',
  component: B2Table,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

type Story = StoryObj<typeof B2Table>;

export const Default: Story = {
  render: (args) => (
    <B2Theme>
      <B2Table {...args} />
    </B2Theme>
  ),
  args: {
    headerData: ['ID', 'Name'],
    data: [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
    ] as IData[],
    renderRow: (item: unknown) => (
      <B2TableRow key={(item as IData).id}>
        <B2TableDataCell>{(item as IData).id}</B2TableDataCell>
        <B2TableDataCell>{(item as IData).name}</B2TableDataCell>
      </B2TableRow>
    ),
    emptyTableComponent: () => <span>Empty list</span>,
  },
};

export const WithPaginator: Story = {
  ...Default,
  args: {
    paginator: true,
    amountPerPage: 3,
    changePage: (newPage: number) => {
      console.log('newPage', newPage);
    },
    currentPage: 1,
    total: 4,
  },
};
