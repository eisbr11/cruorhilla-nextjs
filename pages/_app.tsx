import React from 'react';
import App, { AppProps } from 'next/app';

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
    const { Component, pageProps }: AppProps = this.props;
    return (
      <ThemeContextProvider>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeContextProvider>
    );
  }
}

export default MyApp;
