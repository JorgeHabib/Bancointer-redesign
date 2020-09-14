import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

import Header from './components/Header';
import Gradient from './components/Gradient';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Gradient />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
