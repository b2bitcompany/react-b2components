import { nanoid } from 'nanoid';
import React from 'react';

import {
  ButtonsPage,
  Container,
  FooterContainer,
  FooterMessage,
  Table,
  TableBody,
  TableContainer,
  TableDataCell,
  TableH,
  TableHeader,
  TableRow,
} from './styles';

interface IPaginationFooterText {
  initialCount: number;
  finalCount: number;
  total: number;
}

interface IB2Table<T> {
  headerData: Array<string>;
  data: Array<T>;
  renderRow: (value: T, index: number) => React.ReactElement;
  emptyTableComponent?: () => React.ReactElement;
  paginator: {
    amountPerPage: number;
    changePage: (newPage: number) => void;
    currentPage: number;
    total: number;
    paginationFooterText?: (params: IPaginationFooterText) => string;
  };
  className?: string;
}

const B2Table = <T extends unknown>({
  headerData,
  data,
  renderRow,
  emptyTableComponent,
  paginator,
  className,
}: IB2Table<T>) => {
  const {
    amountPerPage,
    changePage,
    currentPage,
    paginationFooterText,
    total,
  } = paginator;

  const totalCount = total;

  const pages = totalCount === 0 ? 1 : Math.ceil(totalCount / amountPerPage!);

  const paginationInitialCount =
    totalCount === 0 ? 0 : amountPerPage! * (currentPage - 1) + 1;

  const paginationFinalCount =
    paginationInitialCount + (amountPerPage! - 1) < totalCount
      ? paginationInitialCount + (amountPerPage! - 1)
      : totalCount;

  const getMessage = () => {
    return paginationFooterText?.({
      initialCount: paginationInitialCount,
      finalCount: paginationFinalCount,
      total: totalCount,
    });
  };

  const renderHeader = () => {
    return (
      <TableHeader>
        <TableRow>
          {headerData.map(header => (
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
    return (
      <FooterContainer>
        <FooterMessage>{getMessage()}</FooterMessage>
        <ButtonsPage
          pages={pages}
          currentPage={currentPage}
          changePage={changePage}
        />
      </FooterContainer>
    );
  };

  return (
    <Container className={className}>
      <TableContainer>
        <Table>
          {renderHeader()}
          <TableBody>
            {data.length ? renderBody() : renderEmptyComponent()}
          </TableBody>
        </Table>
      </TableContainer>
      {renderButtons()}
    </Container>
  );
};

export {
  B2Table,
  TableDataCell as B2TableDataCell,
  TableRow as B2TableRow,
  IB2Table,
};
