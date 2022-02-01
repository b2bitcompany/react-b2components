import React, { forwardRef } from 'react';

import { VariantType, Button } from './styles';

export interface IB2Button
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: VariantType;
  children: React.ReactNode;
}

export const B2Button = forwardRef<HTMLButtonElement, IB2Button>(
  ({ variant = 'primary', children, ...props }, ref) => {
    return (
      <Button variant={variant} ref={ref} {...props}>
        {children}
      </Button>
    );
  }
);
