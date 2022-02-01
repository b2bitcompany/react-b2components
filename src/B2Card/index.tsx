import React from 'react';

import { Card } from './styles';

export interface IB2Card {
  children: React.ReactNode;
  className?: string;
}

export const B2Card: React.FC<IB2Card> = ({ children, className }) => {
  return <Card className={className}>{children}</Card>;
};
