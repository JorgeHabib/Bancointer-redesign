import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>Banco Inter</div>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
