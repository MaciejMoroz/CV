import React, { lazy, Suspense } from 'react';
import Theme from 'theme/Theme';
import { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from 'theme/GlobalStyle';
// import Loader from 'Components/Loader/Loader'

const Cv = lazy(() => import('./views/Cv'));

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Suspense fallback={'<Loader/>'}>
          <Cv />
        </Suspense>
      </ThemeProvider>
    </>
  );
}

export default App;
