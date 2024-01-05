import { nanoid } from 'nanoid';
import React, { useMemo } from 'react';

import { Button } from './styles';

export interface IB2ButtonsPage {
  pages: number;
  changePage: (newPage: number) => void;
  currentPage: number;
  className?: string;
}

export const B2ButtonsPage: React.FC<IB2ButtonsPage> = ({
  pages,
  changePage,
  currentPage,
  className,
}) => {
  const buttons = useMemo(() => {
    let newButtons = [];
    if (currentPage !== 1) {
      newButtons.push(
        <Button
          key={nanoid()}
          onClick={() => changePage && changePage(currentPage - 1)}
          variant="transparent"
        >
          {'<'}
        </Button>
      );
    }

    newButtons.push(
      <Button
        key={nanoid()}
        onClick={() => changePage && changePage(1)}
        variant="transparent"
        disabled={currentPage === 1}
      >
        {1}
      </Button>
    );

    if (currentPage > 3) {
      newButtons.push(<span key={nanoid()}>...</span>);
    }

    Array.from(Array(pages).keys())
      .filter(
        number =>
          number > 1 &&
          number < pages &&
          (number === currentPage - 1 ||
            number === currentPage + 1 ||
            number === currentPage)
      )
      .forEach(page => {
        newButtons.push(
          <Button
            key={nanoid()}
            onClick={() => changePage && changePage(page)}
            disabled={currentPage === page}
            variant="transparent"
          >
            {page}
          </Button>
        );
      });

    if (currentPage < pages - 2) {
      newButtons.push(<span key={nanoid()}>...</span>);
    }

    newButtons.push(
      <Button
        key={nanoid()}
        onClick={() => changePage && changePage(pages)}
        variant="transparent"
        disabled={currentPage === pages}
      >
        {pages}
      </Button>
    );

    if (currentPage !== pages) {
      newButtons.push(
        <Button
          key={nanoid()}
          onClick={() => changePage && changePage(currentPage + 1)}
          variant="transparent"
        >
          {'>'}
        </Button>
      );
    }

    return newButtons;
  }, [changePage, currentPage, pages]);

  return <div className={className}>{buttons}</div>;
};
