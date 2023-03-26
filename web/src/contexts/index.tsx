import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Props, UserProvider } from './user';

import theme from '../themes';

const AppProvider: React.FC<Props> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <UserProvider>{children}</UserProvider>
    </BrowserRouter>
  </ThemeProvider>
);

export default AppProvider;
