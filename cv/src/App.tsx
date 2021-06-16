import React, { lazy, Suspense } from 'react';
import ReactGA from 'react-ga';

import Theme from 'theme/Theme';
import { ThemeProvider } from 'styled-components/macro';
import GlobalStyle from 'theme/GlobalStyle';
import Loader from 'components/Loader/Loader';

const GA_ID: string = process.env.REACT_APP_GA_ID as string;

if (GA_ID != null) {
  ReactGA.initialize(GA_ID);
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const Cv = lazy(() => import('./views/Cv'));

const App: React.FunctionComponent = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Suspense fallback={<Loader />}>
          <Cv />
        </Suspense>
      </ThemeProvider>
    </>
  );
};

export default App;
