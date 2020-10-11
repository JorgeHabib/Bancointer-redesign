import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

import Routes from './routes';
import { AuthProvider } from './contexts/userContext';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Routes />
          <GlobalStyle />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
