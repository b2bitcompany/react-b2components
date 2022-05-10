import React from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Table,
  TableHeader,
  TableRow,
  TableH,
  TableBody,
  TableDataCell,
} from './styles';

import { B2ButtonsPage } from '../B2ButtonsPage';

interface IB2Table<T> {
  headerData: Array<string>;
  data: Array<T>;
  renderRow: (value: T, index: number) => React.ReactElement;
  emptyTableComponent?: () => React.ReactElement;
  paginator?: boolean;
  amountPerPage?: number;
  changePage?: (newPage: number) => void;
  currentPage?: number;
  total?: number;
}

const B2Table = <T extends unknown>({
  headerData,
  data,
  renderRow,
  emptyTableComponent,
  paginator,
  amountPerPage,
  changePage,
  currentPage,
  total,
}: IB2Table<T>) => {
  const pages = amountPerPage && total ? Math.ceil(total / amountPerPage) : 0;

  const renderHeader = () => {
    return (
      <TableHeader>
        <TableRow>
          {headerData.map((header) => (
            <TableH key={nanoid()}>
              <div>{header}</div>
            </TableH>
          ))}
        </TableRow>
      </TableHeader>
    );
  };

  const renderBody = () => {
    if (paginator && amountPerPage && currentPage) {
      return data.slice(0, amountPerPage).map(renderRow);
    }

    return data.map(renderRow);
  };

  const renderEmptyComponent = () => {
    const spanSize = headerData.length;
    if (emptyTableComponent) {
      return (
        <TableRow>
          <TableDataCell colSpan={spanSize}>
            {emptyTableComponent()}
          </TableDataCell>
        </TableRow>
      );
    }

    return null;
  };

  const renderButtons = () => {
    if (paginator && (!changePage || !currentPage || pages === undefined)) {
      throw new Error(
        'You must provide a changePage function, currentPage value and total value to render the paginator'
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

  return (
    <Container>
      <Table>
        {renderHeader()}
        <TableBody>
          {data.length ? renderBody() : renderEmptyComponent()}
        </TableBody>
      </Table>
      {renderButtons()}
    </Container>
  );
};

export {
  IB2Table,
  B2Table,
  TableRow as B2TableRow,
  TableDataCell as B2TableDataCell,
};
