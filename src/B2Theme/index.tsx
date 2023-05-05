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
    black: {
      main: string;
      one: string;
      two: string;
    };
    white: {
      main: string;
      one: string;
      two: string;
      three: string;
    };
    gray: {
      one: string;
      two: string;
      three: string;
      four: string;
      five: string;
      six: string;
      seven: string;
      eight: string;
      nine: string;
      ten: string;
      eleven: string;
      twelve: string;
    };
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
