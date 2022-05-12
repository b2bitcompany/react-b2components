import React from 'react';

import { Meta, Story } from '@storybook/react';

import { B2Theme, B2List, IB2List } from '../src';

const meta: Meta = {
  title: 'B2List',
  component: B2List,
  argTypes: {
    data: {
      defaultValue: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
        'Item 5',
        'Item 6',
      ],
    },
    renderItem: {
      type: 'function',
      defaultValue: (item: string) => <span>{item}</span>,
    },
    emptyListComponent: {
      defaultValue: () => <span>Empty list</span>,
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<IB2List<string>> = (args) => (
  <B2Theme>
    <B2List {...args} />
  </B2Theme>
);

export const Default = Template.bind({});
export const WithHeader = Template.bind({});
export const WithPaginator = Template.bind({});

WithHeader.args = {
  header: <span>Header</span>,
};

WithPaginator.args = {
  paginator: true,
  amountPerPage: 3,
  changePage: (newPage: number) => {
    console.log('newPage', newPage);
  },
  currentPage: 1,
  total: 6,
};
