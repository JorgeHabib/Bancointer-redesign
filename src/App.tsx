import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

import Routes from './routes';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AnimatePresence>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
