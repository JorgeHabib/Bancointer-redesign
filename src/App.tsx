import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

import Dashboard from './pages/Dashboard';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <Dashboard />
      </AnimatePresence>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
