import React from 'react';

import { Spinner } from './styles';

export interface IB2Spinner {
  className?: string;
}

export const B2Spinner: React.FC<IB2Spinner> = ({ className }) => {
  return <Spinner className={className} />;
};
