import React from 'react';

import { nanoid } from 'nanoid';

import { B2ButtonsPage } from '../B2ButtonsPage';

export interface IB2List {
  data: Array<any>;
  renderItem: (item: any, index: number, key: string) => React.ReactElement;
  renderHeader?: React.ReactElement;
  emptyListComponent: React.ReactElement;
  paginator?: boolean;
  total?: number;
  changePage?: (newPage: number) => void;
  currentPage?: number;
}

export const B2List: React.FC<IB2List> = ({
  data,
  renderHeader,
  renderItem,
  emptyListComponent,
  paginator,
  total,
  changePage,
  currentPage,
}) => {
  const pages = total ? Math.ceil(total / 20) : 0;

  const renderButtons = () => {
    if (paginator && changePage && currentPage && pages > 1) {
      return (
        <B2ButtonsPage
          pages={pages}
          changePage={changePage}
          currentPage={currentPage}
        />
      );
    }

    return null;
  };

  if (data.length <= 0 && emptyListComponent) {
    return emptyListComponent;
  }

  return (
    <>
      {renderHeader}
      {data.map((item, index) => renderItem(item, index, nanoid()))}
      {renderButtons()}
    </>
  );
};
