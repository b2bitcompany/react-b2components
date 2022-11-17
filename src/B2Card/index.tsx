import React from 'react';

import { Card } from './styles';

export interface IB2Card extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const B2Card: React.FC<IB2Card> = ({ children, className }) => {
  return <Card className={className}>{children}</Card>;
};
