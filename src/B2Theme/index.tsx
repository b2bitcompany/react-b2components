import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './Theme';

export interface ITheme {
  borderRadius: string;
  boxShadow: string;
  colors: {
    main: string;
    secondary: string;
    info: string;
    success: string;
    danger: string;
    error: string;
    buttonText: {
      primary: string;
      secondary: string;
      outline: string;
      text: string;
    };
  };
}

export interface IB2Theme<Type> {
  theme?: Type;
  children: React.ReactNode;
}

export const B2Theme = <Type extends ITheme>({
  theme = defaultTheme as Type,
  children,
}: IB2Theme<Type>) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
