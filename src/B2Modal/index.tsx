import React from 'react';

import { Container, Modal } from './styles';

export interface IB2Modal {
  open: boolean;
  modalStyle?: React.CSSProperties;
  children: React.ReactNode;
}

export const B2Modal: React.FC<IB2Modal> = ({ open, modalStyle, children }) => {
  return (
    <Container open={open}>
      <Modal style={modalStyle}>{children}</Modal>
    </Container>
  );
};
