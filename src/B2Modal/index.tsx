import React from 'react';

import { Container, Modal } from './styles';

export interface IB2Modal {
  isOpen: boolean;
  children: React.ReactNode;
  onBackdropClick?: () => void;
  className?: string;
}

export const B2Modal: React.FC<IB2Modal> = ({
  isOpen,
  children,
  onBackdropClick,
  className,
}) => {
  return (
    <Container isOpen={isOpen} onClick={onBackdropClick}>
      <Modal className={className} onClick={(event) => event.stopPropagation()}>
        {children}
      </Modal>
    </Container>
  );
};
