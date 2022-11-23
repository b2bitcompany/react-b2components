import React from 'react';

import { Card } from './styles';

export const B2Card: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  children,
  ...props
}) => {
  return <Card {...props}>{children}</Card>;
};
