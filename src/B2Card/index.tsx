import React from 'react';

import { Card } from './styles';

export interface IB2Card {
  children: React.ReactNode;
}

export const B2Card: React.FC<IB2Card> = ({ children }) => {
  return <Card>{children}</Card>;
};
