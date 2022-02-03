import React from 'react';
import { ThemeProvider } from 'styled-components';

import defaultTheme from './Theme';

export interface ITheme {
  borderRadius: string;
  boxShadow: string;
  sidebarIconSize: string;
  colors: {
    main: string;
    secondary: string;
    info: string;
    success: string;
    danger: string;
    error: string;
    black: string;
    white: string;
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
  fontSize: {
    small: string;
    medium: string;
    big: string;
  };
  fontWeight: {
    semiBold: string;
    bold: string;
    medium: string;
  };
}

export interface IB2Theme {
  theme?: ITheme;
  children: React.ReactNode;
}

export const B2Theme: React.FC<IB2Theme> = ({
  theme = defaultTheme,
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
