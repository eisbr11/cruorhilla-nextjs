import '../styles/globals.css';

import App, { AppProps } from 'next/app';

// eslint-disable-next-line react/jsx-props-no-spreading
// const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

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
      // eslint-disable-next-line react/jsx-props-no-spreading
      <Component {...pageProps} />
    );
  }
}

export default MyApp;
