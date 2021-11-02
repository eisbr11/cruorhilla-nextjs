import React from 'react';
import App, { AppProps } from 'next/app';
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
    const { Component, pageProps, router }: AppProps = this.props;
    return (
      <ThemeContextProvider>
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
