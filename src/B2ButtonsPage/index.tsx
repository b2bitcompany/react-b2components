import React, { useMemo } from 'react';
import { nanoid } from 'nanoid';

import { ButtonContainer, Button } from './styles';

export interface IB2ButtonsPage {
  pages: number;
  changePage: (newPage: number) => void;
  currentPage: number;
}

export const B2ButtonsPage: React.FC<IB2ButtonsPage> = ({
  pages,
  changePage,
  currentPage,
}) => {
  const buttons = useMemo(() => {
    let newButtons = [];

    if (currentPage !== 1) {
      newButtons.push(
        <Button key={nanoid()} onClick={() => changePage && changePage(1)}>
          {'<<'}
        </Button>
      );

      newButtons.push(
        <Button
          key={nanoid()}
          onClick={() =>
            changePage && changePage(currentPage ? currentPage - 1 : 0)
          }
        >
          {'<'}
        </Button>
      );
    }

    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      if (i > 0 && i <= pages) {
        newButtons.push(
          <Button
            key={nanoid()}
            onClick={() => changePage && changePage(i)}
            disabled={currentPage === i}
          >
            {i}
          </Button>
        );
      }
    }

    if (currentPage !== pages) {
      newButtons.push(
        <Button
          key={nanoid()}
          onClick={() =>
            changePage && changePage(currentPage ? currentPage + 1 : 0)
          }
        >
          {'>'}
        </Button>
      );

      newButtons.push(
        <Button key={nanoid()} onClick={() => changePage && changePage(pages)}>
          {'>>'}
        </Button>
      );
    }

    return newButtons;
  }, [changePage, currentPage, pages]);

  return <ButtonContainer>{buttons}</ButtonContainer>;
};
