import React from 'react';

import { nanoid } from 'nanoid';

import { B2ButtonsPage } from '../B2ButtonsPage';

export interface IB2List<T> {
  data: Array<T>;
  renderItem: (item: T, index: number) => React.ReactElement;
  emptyListComponent: React.ReactElement;
  header?: React.ReactElement;
  paginator?: boolean;
  amountPerPage?: number;
  changePage?: (newPage: number) => void;
  currentPage?: number;
}

export const B2List = <T extends unknown>({
  data,
  header,
  emptyListComponent,
  renderItem,
  paginator,
  amountPerPage,
  changePage,
  currentPage,
}: IB2List<T>) => {
  const pages = amountPerPage ? Math.ceil(data.length / amountPerPage) : 0;

  const renderData = () => {
    if (paginator && amountPerPage && currentPage) {
      return data
        .slice(0, amountPerPage)
        .map((item, index) => (
          <div key={nanoid()}>{renderItem(item, index)}</div>
        ));
    }

    return data.map((item, index) => (
      <div key={nanoid()}>{renderItem(item, index)}</div>
    ));
  };

  const renderButtons = () => {
    if (paginator && (!changePage || !currentPage || pages === undefined)) {
      throw new Error(
        'You must provide a changePage function, currentPage value and pages value to render the paginator'
      );
    }

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
      {header}
      {renderData()}
      {renderButtons()}
    </>
  );
};
