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

interface IB2Table {
  blue?: boolean;
  headerData: Array<string>;
  tableData: Array<any>;
  tableEmptyComponent: () => React.ReactElement;
  renderRow: (value: any, index: number) => React.ReactElement;
  paginator?: boolean;
  total?: number;
  changePage?: (newPage: number) => void;
  currentPage?: number;
}

const B2Table: React.FC<IB2Table> = ({
  headerData,
  tableData,
  tableEmptyComponent,
  renderRow,
  paginator,
  total,
  changePage,
  currentPage,
}) => {
  const pages = total ? Math.ceil(total / 20) : 0;

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
    let data = tableData;
    if (paginator) {
      data = tableData.slice(0, 20);
    }

    return (
      <TableBody>
        {data.map((value, index) => renderRow(value, index))}
      </TableBody>
    );
  };

  const renderEmptyComponent = () => {
    const spanSize = headerData.length;
    if (tableData === null || tableData?.length === 0) {
      return (
        <TableBody>
          <TableRow>
            <TableDataCell colSpan={spanSize}>
              {tableEmptyComponent()}
            </TableDataCell>
          </TableRow>
        </TableBody>
      );
    }

    return null;
  };

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

  return (
    <Container>
      <Table>
        {renderHeader()}
        {tableData !== null ? renderBody() : null}
        {renderEmptyComponent()}
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
