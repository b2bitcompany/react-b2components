import React from 'react';

import { Meta, Story } from '@storybook/react';

import {
  B2Theme,
  B2Table,
  B2TableRow,
  B2TableDataCell,
  IB2Table,
} from '../src';

interface IData {
  id: number;
  name: string;
}

const meta: Meta = {
  title: 'B2Table',
  component: B2Table,
  argTypes: {
    headerData: {
      defaultValue: ['ID', 'Name'],
    },
    data: {
      defaultValue: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
      ],
    },
    renderRow: {
      defaultValue: (item: IData) => (
        <B2TableRow key={item.id}>
          <B2TableDataCell>{item.id}</B2TableDataCell>
          <B2TableDataCell>{item.name}</B2TableDataCell>
        </B2TableRow>
      ),
    },
    emptyTableComponent: {
      defaultValue: () => <span>Empty list</span>,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IB2Table<IData>> = (args) => (
  <B2Theme>
    <B2Table {...args} />
  </B2Theme>
);

export const Default = Template.bind({});
export const WithPaginator = Template.bind({});

WithPaginator.args = {
  paginator: true,
  amountPerPage: 3,
  changePage: (newPage: number) => {
    console.log('newPage', newPage);
  },
  currentPage: 1,
  total: 4,
};
