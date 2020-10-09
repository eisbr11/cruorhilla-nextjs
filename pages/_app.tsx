import React from 'react';
import App, { AppProps } from 'next/app';

import { ThemeProvider } from 'react-jss';
import getTheme from '@themes/index';
import '../styles/globals.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return {
      pageProps,
    };
  }

  componentDidMount() {
    const style = document.getElementById('server-side-styles');

    if (style) {
      style.parentNode.removeChild(style);
    }
  }

  render() {
    const { Component, pageProps }: AppProps = this.props;
    return (
      <ThemeProvider theme={getTheme('angstblitz')}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
