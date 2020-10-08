import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

import StoryblokService from '@utils/storyblok-service';

export default class JssDocument extends Document {
  static async getInitialProps(ctx) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => originalRenderPage({
      enhanceApp: (App) => (props) => (
        <JssProvider registry={registry} generateId={generateId}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          <App {...props} />
        </JssProvider>
      ),
    });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  }

  render() {
    /* eslint-disable react/no-danger */
    return (
      <Html>
        <Head>
          <script
            dangerouslySetInnerHTML={{ __html: `var StoryblokCacheVersion = '${StoryblokService.getCacheVersion()}';` }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
    /* eslint-enable react/no-danger */
  }
}
