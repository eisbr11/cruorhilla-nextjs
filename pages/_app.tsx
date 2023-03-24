import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import ThemeContextProvider from '@context/themeContextProvider.component';

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <ThemeContextProvider>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <AnimatePresence
          exitBeforeEnter
        >
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </ThemeContextProvider>
    );
  }
}

export default MyApp;
