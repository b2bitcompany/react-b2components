import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './Theme';

export interface IB2Theme {
  theme?: any;
  children: React.ReactNode;
}

export const B2Theme: React.FC<IB2Theme> = ({
  theme = defaultTheme,
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
