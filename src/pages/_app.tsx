import Head from 'next/head';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import theme from '../styles/theme-dark';
import { PrivacityPolicyProvider } from '../contexts/privacity-policy-context';
import GATracker from '../components/GATracker';
/*
o _app.tsx nesse caso está sendo utilizado para conseguirmos
usar a api de contextos do next, ela permite compartilharmos funcionalidades
entre as páginas de forma dinamica.
https://nextjs.org/docs/advanced-features/custom-app
*/
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <PrivacityPolicyProvider>
          <CssBaseline />
          <GATracker />
          <Component {...pageProps} />
        </PrivacityPolicyProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
